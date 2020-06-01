package kr.codesquad.airbnb09.service;


import kr.codesquad.airbnb09.domain.AccommodationVO;
import kr.codesquad.airbnb09.web.ImageDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.LocalDate;
import java.util.List;

@Mapper
public interface ListingMapper {

    List<AccommodationVO> selectAllListing(@Param("count") int count);
    List<AccommodationVO> filterListingByDate(@Param("date_checkin") LocalDate checkin, @Param("date_checkout") LocalDate checkout,
                                              @Param("total_personnel") Integer accommodates,
                                              @Param("min_price") Integer minPrice, @Param("max_price") Integer maxPrice);
    List<AccommodationVO> filterListingByAccommodates(@Param("total_personnel") Integer accommodates);
    List<String> selectImageUrlsByListingId(@Param("listing_id") Long listingId);
}
