package kr.codesquad.airbnb09.mock;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequestMapping("/mock/listing")
@RestController
public class MockController {
    private static final Logger log = LoggerFactory.getLogger(MockController.class);

    @GetMapping()
    public List<MockInitResponseDTO> initData() {
        List<String> thumbnails = new ArrayList<>();
        MockOneNightRateDTO oneNightRateDto1 = new MockOneNightRateDTO("59,000", "52,000");
        MockOneNightRateDTO oneNightRateDto2 = new MockOneNightRateDTO("170,000", "163,000");
        thumbnails.add("https://i.imgur.com/KX9w8fC.jpg");
        thumbnails.add("https://a2.muscache.com/im/pictures/c0842db1-ee98-4fe8-870b-d1e2af33855d.jpg?aki_policy=x_large");
        MockInitResponseDTO mockInitResponseDto1 = MockInitResponseDTO.builder()
                .id(11)
                .name("Sunny Bungalow in the City")
                .country("United States")
                .rating(4.9)
                .isSuperHost(true)
                .thumbnails(thumbnails)
                .oneNightRate(oneNightRateDto1)
                .build();

        MockInitResponseDTO mockInitResponseDto2 = MockInitResponseDTO.builder()
                .id(12)
                .name("Charming room in pet friendly apt")
                .country("United States")
                .rating(3.6)
                .isSuperHost(false)
                .thumbnails(thumbnails)
                .oneNightRate(oneNightRateDto2)
                .build();


        List<MockInitResponseDTO> mockInitResponseDtos = new ArrayList<>();
        mockInitResponseDtos.add(mockInitResponseDto1);
        mockInitResponseDtos.add(mockInitResponseDto2);
        return mockInitResponseDtos;
    }

    @GetMapping("/search")
    public List<MockInitResponseDTO> mockSearchData(@RequestParam Map<String, String> params) {
        log.debug("checkin : {}, checkout : {}, adults : {}, children : {}, infants : {}, priceMin : {}, priceMax : {}",
                params.get("checkin"), params.get("checkout"), params.get("adults"), params.get("children"), params.get("infants"),
                params.get("priceMin"), params.get("priceMax"));
        List<String> thumbnails = new ArrayList<>();
        MockOneNightRateDTO oneNightRateDto1 = new MockOneNightRateDTO("59,000", "52,000");
        MockOneNightRateDTO oneNightRateDto2 = new MockOneNightRateDTO("170,000", "163,000");
        thumbnails.add("https://i.imgur.com/KX9w8fC.jpg");
        thumbnails.add("https://a2.muscache.com/im/pictures/c0842db1-ee98-4fe8-870b-d1e2af33855d.jpg?aki_policy=x_large");
        MockPriceDTO priceDto1 = MockPriceDTO.builder()
                .accomdationRate("1,104,300")
                .cleaningFee("42,945")
                .serviceFee("600")
                .totalPrice("1,147,845")
                .build();
        MockPriceDTO priceDto2 = MockPriceDTO.builder()
                .accomdationRate("151,534")
                .cleaningFee("12,270")
                .serviceFee("1,200")
                .totalPrice("165,004")
                .build();

        MockInitResponseDTO mockInitResponseDto1 = MockInitResponseDTO.builder()
                .id(11)
                .name("Sunny Bungalow in the City")
                .country("United States")
                .rating(4.9)
                .isSuperHost(true)
                .thumbnails(thumbnails)
                .oneNightRate(oneNightRateDto1)
                .nights(4)
                .price(priceDto1)
                .build();

        MockInitResponseDTO mockInitResponseDto2 = MockInitResponseDTO.builder()
                .id(12)
                .name("Charming room in pet friendly apt")
                .country("United States")
                .rating(3.6)
                .isSuperHost(false)
                .thumbnails(thumbnails)
                .oneNightRate(oneNightRateDto2)
                .nights(2)
                .price(priceDto2)
                .build();


        List<MockInitResponseDTO> mockInitResponseDtos = new ArrayList<>();
        mockInitResponseDtos.add(mockInitResponseDto1);
        mockInitResponseDtos.add(mockInitResponseDto2);
        return mockInitResponseDtos;
    }

}
