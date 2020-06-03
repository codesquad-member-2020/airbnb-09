package kr.codesquad.airbnb09.web.user;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ToString
public class UserVO {
    private Long index;
    private Long id;
    private String name;
    private String email;
}
