package kr.codesquad.airbnb09.service;

import kr.codesquad.airbnb09.web.user.GithubToken;
import kr.codesquad.airbnb09.web.user.UserVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class LoginService {
    private static final Logger log = LoggerFactory.getLogger(LoginService.class);

    public GithubToken authenticateGithub(String code) {
        String url = "https://github.com/login/oauth/access_token";
        String clientId = "ed017fb540a271bbf01b";
        String clientSecret = "235ff37508a30a3c5901cfc861e14fb64de2c6d6";
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        Map<String, String> header = new HashMap<>();
        header.put("Accept", "application/json");
        headers.setAll(header);

        MultiValueMap<String, String> requestPayloads = new LinkedMultiValueMap<>();
        Map<String, String> requestPayload = new HashMap<>();
        requestPayload.put("client_id", clientId);
        requestPayload.put("client_secret", clientSecret);
        requestPayload.put("code", code);
        requestPayloads.setAll(requestPayload);

        HttpEntity<?> request = new HttpEntity<>(requestPayloads, headers);
        ResponseEntity<?> response = new RestTemplate().postForEntity(url, request, GithubToken.class);
        return (GithubToken) response.getBody();
    }

    public UserVO requestUserInfo(GithubToken githubToken) {
        String url = "https://api.github.com/user";

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(githubToken.getAccessToken());
        HttpEntity entity = new HttpEntity(headers);

        ResponseEntity<UserVO> response = new RestTemplate().exchange(url, HttpMethod.GET, entity, UserVO.class);

        if(response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        }

        return null;
    }

    // github인증 후, jwt 토큰 발행
    public String loginAsGithub(String code) {
        GithubToken githubToken = authenticateGithub(code);
        UserVO userVO = requestUserInfo(githubToken);
        // user table에 저장
        // jwt 토큰 발행
        String jwtToken = JwtUtil.createToken(userVO);
        return jwtToken;
    }
}
