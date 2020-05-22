package kr.codesquad.airbnb09.mock;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class MockSearchRequestDto {
    private String checkin;
    private String checkout;
    private int adults;
    private int children;
    private int infants;
    private int priceMin;
    private int priceMax;

    @Builder
    public MockSearchRequestDto(String checkin, String checkout, int adults, int children, int infants, int priceMin, int priceMax) {
        this.checkin = checkin;
        this.checkout = checkout;
        this.adults = adults;
        this.children = children;
        this.infants = infants;
        this.priceMin = priceMin;
        this.priceMax = priceMax;
    }
}
