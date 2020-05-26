package kr.codesquad.airbnb09.mock;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
@Builder
public class MockOneNightRateDTO {
    private String original;
    private String selling;

    @Builder
    public MockOneNightRateDTO(String original, String selling) {
        this.original = original;
        this.selling = selling;
    }
}
