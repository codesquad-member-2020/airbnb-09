package kr.codesquad.airbnb09.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import kr.codesquad.airbnb09.web.user.UserVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtService {
    private static final Logger log = LoggerFactory.getLogger(JwtService.class);
    public static String secretKey = "Airbnb9ProjectJWTToGetSecretKeys";
    private static Key key = Keys.hmacShaKeyFor(secretKey.getBytes());

    public String createToken(UserVO userVO) {
        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", "HS256");

        Map<String, Object> payloads = new HashMap<>();
        payloads.put("userId", userVO.getId());
        payloads.put("name", userVO.getName());
        payloads.put("email", userVO.getEmail());
        log.debug("user : {}", userVO);

        String token = Jwts.builder()
                .setHeader(headers)
                .setClaims(payloads)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
        return token;
    }

    // 유효한 토큰 값인지 확인
    // 1. boolean으로 return 또는
    // 2. void로 유효하지 않은 경우에 runtime error 발생 (v)
    public void checkValid(String jwtToken) {
        log.trace("[*] 토큰 유효성 체크 : {}", jwtToken);
        Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJwt(jwtToken);
    }
}
