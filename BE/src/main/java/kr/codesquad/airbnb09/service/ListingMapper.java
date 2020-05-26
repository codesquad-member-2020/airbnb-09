package kr.codesquad.airbnb09.service;


import kr.codesquad.airbnb09.domain.AccommodationDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ListingMapper {

    List<AccommodationDTO> getAccommodationList();
}
