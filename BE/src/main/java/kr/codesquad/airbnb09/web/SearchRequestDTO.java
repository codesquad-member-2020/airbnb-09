package kr.codesquad.airbnb09.web;

import lombok.*;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
public class SearchRequestDTO {
    private String checkin;
    private String checkout;
    private int adults;
    private int children;
    private int infants;
    private int priceMin;
    private int priceMax;

    public SearchRequestDTO(String checkin, String checkout, int adults, int children, int infants, int priceMin, int priceMax) {
        this.checkin = checkin;
        this.checkout = checkout;
        this.adults = adults;
        this.children = children;
        this.infants = infants;
        this.priceMin = priceMin;
        this.priceMax = priceMax;
    }
}
