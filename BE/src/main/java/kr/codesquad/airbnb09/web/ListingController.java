package kr.codesquad.airbnb09.web;

import kr.codesquad.airbnb09.service.ListingMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/listing")
@RestController
public class ListingController {

    private ListingMapper listingMapper;

    public ListingController(ListingMapper listingMapper) {
        this.listingMapper = listingMapper;
    }

    @GetMapping
    public List lookupAllData() {
        return listingMapper.getAccommodationList();
    }

    @GetMapping("/search")
    public String searchData() {
        return "필터링한 목록";
    }
}
