package kr.codesquad.airbnb09;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("kr.codesquad.airbnb09.service")
public class Airbnb09Application {

	public static void main(String[] args) {
		SpringApplication.run(Airbnb09Application.class, args);
	}
}
