package kr.codesquad.airbnb09.domain;

import lombok.*;

@Data
public class AccommodationDTO {
    private Long id;
    private String title;
    private int price;
    private int discountPrice;
    private int cleaningFee;
    private int serviceFee;
    private String country;
    private double rating;
    private boolean isSuperhost;
    private int accommodates;
    private double latitude;
    private double longitude;
}
