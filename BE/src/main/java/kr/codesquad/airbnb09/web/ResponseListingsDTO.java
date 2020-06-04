package kr.codesquad.airbnb09.web;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.List;

@ToString
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseListingsDTO {
    private Double average;
    private int maxPrice;
    private int minPrice;
    private int[] counts;
    private List<AllListingDTO> allListingDTO;
}
