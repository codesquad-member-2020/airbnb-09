package kr.codesquad.airbnb09.web;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class SearchRequestDTO {
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkin;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkout;
    private Integer adults;
    private Integer children;
    private Integer infants;
    private Integer priceMin;
    private Integer priceMax;
    private Integer offset;
    private Integer limit;

    public void setDefaultValue() {
        if (this.adults == null) {
            this.adults = 0;
        }

        if (this.children == null) {
            this.children = 0;
        }

        if (this.infants == null) {
            this.infants = 0;
        }

        if (this.priceMin == null) {
            this.priceMin = 0;
        }

        if (this.priceMax == null) {
            this.priceMax = 100000000;
        }

        if (this.checkin == null) {
            this.checkin = LocalDate.now();
            this.checkout = this.checkin.plus(1, ChronoUnit.DAYS);
        }

        if (this.limit == null) {
            this.limit = 30;
        }

        if (this.offset == null) {
            this.offset = 0;
        }
    }

    public int totalPeraonnel() {
        setDefaultValue();
        return this.adults + this.children + this.infants;
    }

    public boolean isEmptyDate() {
        return this.checkin == null || this.checkout == null;
    }
}
