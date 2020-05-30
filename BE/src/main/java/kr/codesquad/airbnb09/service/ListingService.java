package kr.codesquad.airbnb09.service;

import kr.codesquad.airbnb09.domain.AccommodationVO;
import kr.codesquad.airbnb09.web.AllListingDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

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
}
