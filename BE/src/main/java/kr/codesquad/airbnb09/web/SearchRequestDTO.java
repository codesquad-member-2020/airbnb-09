package kr.codesquad.airbnb09.web;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
public class SearchRequestDTO {
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkin;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkout;
    private int adults;
    private int children;
    private int infants;
    private int priceMin;
    private int priceMax;

    public SearchRequestDTO(LocalDate checkin, LocalDate checkout, int adults, int children, int infants, int priceMin, int priceMax) {
        this.checkin = checkin;
        this.checkout = checkout;
        this.adults = adults;
        this.children = children;
        this.infants = infants;
        this.priceMin = priceMin;
        this.priceMax = priceMax;
    }
}
