package kr.codesquad.airbnb09.web;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AllListingDTO {
    private long id;
    private String name;
    private String country;
    private double rating;
    private boolean isSuperHost;
//    private List<String> thumbnails;
    private OneNightRateDTO oneNightRate;
    private int nights;
    private PriceDTO price;
}
