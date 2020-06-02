package kr.codesquad.airbnb09.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import kr.codesquad.airbnb09.web.user.UserVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.Key;
import java.util.HashMap;
import java.util.Map;

public class JwtUtil {
    private static final Logger log = LoggerFactory.getLogger(JwtUtil.class);
    public static String secretKey = "Airbnb9ProjectJWTToGetSecretKeys";
    private static Key key = Keys.hmacShaKeyFor(secretKey.getBytes());

    public static String createToken(UserVO userVO) {
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
}
