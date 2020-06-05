package kr.codesquad.airbnb09.mock;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MockPriceDTO {
    private String accomdationRate;
    private String cleaningFee;
    private String serviceFee;
    private String totalPrice;
}
