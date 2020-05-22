package kr.codesquad.airbnb09.mock;


import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
@Builder
public class MockInitResponseDto {
    private long id;
    private String name;
    private String country;
    private double rating;
    private boolean isSuperHost;
    private List<String> thumbnails;
    private MockOneNightRateDto oneNightRate;
    private int nights;
    private MockPriceDto price;
}
