package kr.codesquad.airbnb09.web.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    public String login() {
        return "login";
    }
}
