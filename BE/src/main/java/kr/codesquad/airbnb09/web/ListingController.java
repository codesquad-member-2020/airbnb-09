package kr.codesquad.airbnb09.web;

import kr.codesquad.airbnb09.service.ListingMapper;
import kr.codesquad.airbnb09.service.ListingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/listing")
@RestController
public class ListingController {
    private static final Logger log = LoggerFactory.getLogger(ListingController.class);

    private ListingMapper listingMapper;
    private ListingService listingService;

    public ListingController(ListingMapper listingMapper, ListingService listingService) {
        this.listingMapper = listingMapper;
        this.listingService = listingService;
    }

    @GetMapping
    public List<AllListingDTO> viewAllListing() {
        return listingService.getAccommodations(30);
    }

    @GetMapping("/search")
    public List<AllListingDTO> searchData(SearchRequestDTO searchRequestDTO) {
        log.debug("[*] searchRequestDto : {}", searchRequestDTO);

        return listingService.searhAccommodations(searchRequestDTO);
    }
}
