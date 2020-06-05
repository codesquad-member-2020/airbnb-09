package kr.codesquad.airbnb09.web;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PriceDTO {
    private String accomdationRate;
    private String cleaningFee;
    private String serviceFee;
    private String totalPrice;
}
