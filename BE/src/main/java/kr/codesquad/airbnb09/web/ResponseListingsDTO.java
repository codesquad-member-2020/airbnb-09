package kr.codesquad.airbnb09.web;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
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
    private int priceInterval;
    private Double average;
    private int max;
    private int min;
    private int[] counts;
}
