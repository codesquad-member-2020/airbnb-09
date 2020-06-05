package kr.codesquad.airbnb09.web;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
@Builder
public class OneNightRateDTO {
    private String original;
    private String selling;
}
