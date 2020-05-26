package kr.codesquad.airbnb09.mybatis;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.InputStream;

@SpringBootTest
public class DBTest {

    @Test
    public void SqlFactory에서_Session을_Build() {
        //설정 정보의 InputStream을 받아온다.
        String resource = "mybatis-config.xml";
        InputStream inputStream = getClass().getResourceAsStream(resource);

        //InputStream을 통해 설정 정보를 읽어서 SqlSessionFactory를 빌드한다.
//        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder()
    }
}
