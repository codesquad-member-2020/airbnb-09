package kr.codesquad.airbnb09.mock;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class MockPriceDto {
    private String accomdationRate;
    private String cleaningFee;
    private String serviceFee;
    private String totalPrice;

    @Builder
    public MockPriceDto(String accomdationRate, String cleaningFee, String serviceFee, String totalPrice) {
        this.accomdationRate = accomdationRate;
        this.cleaningFee = cleaningFee;
        this.serviceFee = serviceFee;
        this.totalPrice = totalPrice;
    }
}
