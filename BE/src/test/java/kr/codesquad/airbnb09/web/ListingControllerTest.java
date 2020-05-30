package kr.codesquad.airbnb09.web;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mybatis.spring.boot.test.autoconfigure.AutoConfigureMybatis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;

@AutoConfigureMybatis // Mybatis를 포함하고 있는 프로젝트라면 꼭 사용
@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ListingControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    void viewAllListing() {
    }

    @Test
    void searchData() throws Exception {
        // given
        String checkin = "2020-05-29";
        String checkout = "2020-05-31";
        int adults = 1;
        int children = 0;
        int infants = 0;
        int priceMin = 0;
        int priceMax = 0;


        String url = "http://localhost:" + port + "/listing/search?checkin=" + checkin +"&checkout=" + checkout + "&adults=" + adults
                + "&children=" + children + "&infants=" + infants;

        //when
        ResponseEntity<String> responseEntity = testRestTemplate.getForEntity(url, String.class);

        //then
        String returnValue = "필터링한 목록";
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isEqualTo(returnValue);

    }
}
