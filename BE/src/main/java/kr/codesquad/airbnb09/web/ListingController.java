package kr.codesquad.airbnb09.web;

import kr.codesquad.airbnb09.service.ListingMapper;
import kr.codesquad.airbnb09.service.ListingService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/listing")
@RestController
public class ListingController {

    private ListingMapper listingMapper;
    private ListingService listingService;

    public ListingController(ListingMapper listingMapper, ListingService listingService) {
        this.listingMapper = listingMapper;
        this.listingService = listingService;
    }

    @GetMapping
    public List viewAllListing() {
        return listingService.getAccommodations();
    }

    @GetMapping("/search")
    public String searchData() {
        return "필터링한 목록";
    }
}
