package kr.codesquad.airbnb09.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/listing")
@RestController
public class ListingController {

    @GetMapping
    public String initData() {
        return "전체 목록";
    }

    @GetMapping("/search")
    public String searchData() {
        return "필터링한 목록";
    }
}
