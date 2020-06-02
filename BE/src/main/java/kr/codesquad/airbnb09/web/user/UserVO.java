package kr.codesquad.airbnb09.web.user;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class UserVO {
    private Long id;
    private String name;
    private String email;
}
