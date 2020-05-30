package kr.codesquad.airbnb09.web;

import kr.codesquad.airbnb09.service.ListingMapper;
import kr.codesquad.airbnb09.service.ListingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RequestMapping("/listing")
@RestController
public class ListingController {
    private static final Logger log = LoggerFactory.getLogger(ListingService.class);

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
    public String searchData(SearchRequestDTO searchRequestDTO) {
        log.debug("[*] searchRequestDto : {}", searchRequestDTO);
        LocalDate checkin = LocalDate.of(2020,5,11);
        LocalDate checkout = LocalDate.of(2020,5,15);

        listingService.searhAccommodations(checkin, checkout);
        return "필터링한 목록";
    }
}
