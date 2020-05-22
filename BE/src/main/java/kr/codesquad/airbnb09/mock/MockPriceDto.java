package kr.codesquad.airbnb09.mock;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
public class MockPriceDto {
    private String accomdationRate;
    private String cleaningFee;
    private String serviceFee;
    private String totalPrice;
}
