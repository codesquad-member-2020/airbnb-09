package kr.codesquad.airbnb09.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/reserve")
@RestController
public class ReserveController {
    private static final Logger log = LoggerFactory.getLogger(ReserveController.class);

    @GetMapping
    public String reserve() {
        log.debug("[*] 예약하기");
        return "예약";
    }
}
