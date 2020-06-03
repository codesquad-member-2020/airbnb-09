package kr.codesquad.airbnb09.service;

import kr.codesquad.airbnb09.domain.AccommodationVO;
import kr.codesquad.airbnb09.web.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.text.NumberFormat;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Service
public class ListingService {
    private static final Logger log = LoggerFactory.getLogger(ListingService.class);

    private ListingMapper listingMapper;

    public ListingService(ListingMapper listingMapper) {
        this.listingMapper = listingMapper;
    }

    public List<AccommodationVO> getAllListing(int count) {
        return listingMapper.selectAllListing(count);
    }

    public List<AllListingDTO> getAccommodations(int count) {
        List<AllListingDTO> allListingDTOs = new ArrayList<>();
        List<AccommodationVO> accommodationVOs = getAllListing(count);

        for (AccommodationVO accommodationVO : accommodationVOs) {
            AllListingDTO allListingDTO;
            log.debug("accommodationVO : {}", accommodationVO);
            log.debug("id : {}, name : {}, country : {}", accommodationVO.getId(), accommodationVO.getTitle(), accommodationVO.getCountry());
            allListingDTO = AllListingDTO.builder()
                    .id(accommodationVO.getId())
                    .name(accommodationVO.getTitle())
                    .country(accommodationVO.getCountry())
                    .rating(accommodationVO.getRating())
                    .isSuperHost(accommodationVO.isSuperhost())
                    .build();
            List<String> imageDTOS = getImageUrls(accommodationVO.getId());
            allListingDTO.setThumbnails(imageDTOS);
            allListingDTOs.add(allListingDTO);
        }
        return allListingDTOs;
    }

    public List<AllListingDTO> searhAccommodations(SearchRequestDTO searchRequestDTO) {
        List<AllListingDTO> allListingDTOs = new ArrayList<>();
        List<AccommodationVO> accommodationVOs = null;

//         날짜가 비어있는 경우
        if (searchRequestDTO.isEmptyDate()) {
            accommodationVOs = listingMapper.filterListingByAccommodates(searchRequestDTO.totalPeraonnel());
            fillAllListing(allListingDTOs,accommodationVOs, 0);
            log.debug("[*] count of accommodationVOs : {}", allListingDTOs.size());
            return allListingDTOs;
        }

        searchRequestDTO.setDefaultValue(); //인원수와 checkin 날짜가 선택되지 않은 경우 default value를 저장
        LocalDate checkin = searchRequestDTO.getCheckin();
        LocalDate checkout = searchRequestDTO.getCheckout();
        int nights = (int) ChronoUnit.DAYS.between(checkin, checkout);
        int accommodates = searchRequestDTO.totalPeraonnel();
        int minPrice = searchRequestDTO.getPriceMin();
        int maxPrice = searchRequestDTO.getPriceMax();

        log.debug("[*] searchRequestDTO : {}", searchRequestDTO);

        if (checkin != null && checkout != null) {
             accommodationVOs = listingMapper.filterListingByDate(checkin, checkout, accommodates, minPrice, maxPrice);
        }

        fillAllListing(allListingDTOs, accommodationVOs, nights);
        return allListingDTOs;
    }

    private void fillAllListing(List<AllListingDTO> allListingDTOs, List<AccommodationVO> accommodationVOs, int nights) {
        for (AccommodationVO accommodationVO : accommodationVOs) {
            AllListingDTO allListingDTO = AllListingDTO.builder()
                    .id(accommodationVO.getId())
                    .name(accommodationVO.getTitle())
                    .country(accommodationVO.getCountry())
                    .rating(accommodationVO.getRating())
                    .isSuperHost(accommodationVO.isSuperhost())
                    .nights(nights)
                    .build();
            if (nights > 0) {
                OneNightRateDTO oneNightRateDTO = OneNightRateDTO.builder()
                        .original(NumberFormat.getInstance().format(accommodationVO.getPrice()))
                        .selling(NumberFormat.getInstance().format(accommodationVO.getDiscountPrice()))
                        .build();
                allListingDTO.setOneNightRate(oneNightRateDTO);
                PriceDTO priceDTO = fillPriceDTO(nights, accommodationVO);
                allListingDTO.setPrice(priceDTO);
            }
            List<String> imageDTOS = getImageUrls(accommodationVO.getId());
            allListingDTO.setThumbnails(imageDTOS);
            allListingDTOs.add(allListingDTO);
        }
    }

    private PriceDTO fillPriceDTO(int nights, AccommodationVO accommodationVO) {
        return PriceDTO.builder()
                        .accomdationRate(NumberFormat.getInstance().format(accommodationVO.getDiscountPrice() * (long) nights))
                        .cleaningFee(NumberFormat.getInstance().format(accommodationVO.getCleaningFee()))
                        .serviceFee(NumberFormat.getInstance().format(accommodationVO.getServiceFee()))
                        .totalPrice(NumberFormat.getInstance().format(accommodationVO.getDiscountPrice() * nights + accommodationVO.getCleaningFee() + (long) accommodationVO.getServiceFee()))
                        .build();
    }

    private List<String> getImageUrls(Long listingId) {
        return listingMapper.selectImageUrlsByListingId(listingId);
    }
}
