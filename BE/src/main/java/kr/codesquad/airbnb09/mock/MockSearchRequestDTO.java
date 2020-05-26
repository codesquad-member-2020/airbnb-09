package kr.codesquad.airbnb09.mock;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Builder
public class MockSearchRequestDTO {
    private String checkin;
    private String checkout;
    private int adults;
    private int children;
    private int infants;
    private int priceMin;
    private int priceMax;
}
