package kr.codesquad.airbnb09.web;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

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

        if(this.priceMin == null) {
            this.priceMin = 0;
        }
    }

    public int totalPeraonnel() {
        setDefaultValue();
        return this.adults + this.children + this.infants;
    }
}
