package kr.codesquad.airbnb09.service;

import kr.codesquad.airbnb09.domain.AccommodationVO;
import kr.codesquad.airbnb09.web.AllListingDTO;
import kr.codesquad.airbnb09.web.OneNightRateDTO;
import kr.codesquad.airbnb09.web.PriceDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.text.NumberFormat;
import java.time.LocalDate;
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
            allListingDTOs.add(allListingDTO);
        }
        return allListingDTOs;
    }

    public List<AllListingDTO> searhAccommodations(LocalDate checkin, LocalDate checkout) {
        log.debug("[*] checkin : {}, checkout : {}", checkin, checkout);
        int nights = 1;

        List<AllListingDTO> allListingDTOs = new ArrayList<>();
        List<AccommodationVO> accommodationVOs = null;
        if (checkin != null && checkout != null) {
             accommodationVOs = listingMapper.filterListingByDate(checkin, checkout);
        }

        for (AccommodationVO accommodationVO : accommodationVOs) {
            OneNightRateDTO oneNightRateDTO = OneNightRateDTO.builder()
                    .original(NumberFormat.getInstance().format(accommodationVO.getPrice()))
                    .selling(NumberFormat.getInstance().format(accommodationVO.getDiscountPrice()))
                    .build();
            PriceDTO priceDTO = PriceDTO.builder()
                    .accomdationRate(NumberFormat.getInstance().format(accommodationVO.getDiscountPrice() * (long) nights))
                    .cleaningFee(NumberFormat.getInstance().format(accommodationVO.getCleaningFee()))
                    .serviceFee(NumberFormat.getInstance().format(accommodationVO.getServiceFee()))
                    .totalPrice(NumberFormat.getInstance().format(accommodationVO.getDiscountPrice() * nights + accommodationVO.getCleaningFee() + (long) accommodationVO.getServiceFee()))
                    .build();
            AllListingDTO allListingDTO = AllListingDTO.builder()
                    .id(accommodationVO.getId())
                    .name(accommodationVO.getTitle())
                    .country(accommodationVO.getCountry())
                    .rating(accommodationVO.getRating())
                    .isSuperHost(accommodationVO.isSuperhost())
                    .oneNightRate(oneNightRateDTO)
                    .nights(nights)
                    .price(priceDTO)
                    .build();
            allListingDTOs.add(allListingDTO);
        }
        return allListingDTOs;
    }
}
