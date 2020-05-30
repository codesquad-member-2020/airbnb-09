package kr.codesquad.airbnb09.mybatis;

import kr.codesquad.airbnb09.domain.AccommodationVO;
import kr.codesquad.airbnb09.service.ListingMapper;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.AutoConfigureMybatis;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@AutoConfigureMybatis // Mybatis를 포함하고 있는 프로젝트라면 꼭 사용
@SpringBootTest
public class DBTest {
    private static final Logger log = LoggerFactory.getLogger(DBTest.class);

    @Autowired
    private ListingMapper listingMapper;

    @Test
    public void selectAllListingTest() {
        List<AccommodationVO> accommodationVOList = listingMapper.selectAllListing();

        for (AccommodationVO accommodationVO : accommodationVOList) {
            log.debug("accommodationVO : {}", accommodationVO);
        }

        assertThat(accommodationVOList.size()).isEqualTo(500);
    }
}
