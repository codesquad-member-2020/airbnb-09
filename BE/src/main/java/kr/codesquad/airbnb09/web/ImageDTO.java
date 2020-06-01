package kr.codesquad.airbnb09.web;

import lombok.*;
import org.springframework.web.bind.annotation.ModelAttribute;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImageDTO {
    private Long id;
    private String url;
    private Long listingId;
}
