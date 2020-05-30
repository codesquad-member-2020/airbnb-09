package kr.codesquad.airbnb09.service;


import kr.codesquad.airbnb09.domain.AccommodationVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ListingMapper {

    List<AccommodationVO> selectAllListing(@Param("count") int count);
}
