package kr.codesquad.airbnb09.mock;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
public class MockSearchRequestDto {
    private String checkin;
    private String checkout;
    private int adults;
    private int children;
    private int infants;
    private int priceMin;
    private int priceMax;
}
