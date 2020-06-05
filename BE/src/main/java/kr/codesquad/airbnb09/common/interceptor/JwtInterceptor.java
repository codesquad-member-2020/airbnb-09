package kr.codesquad.airbnb09.common.interceptor;

import kr.codesquad.airbnb09.service.JwtService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.SignatureException;

@Component
public class JwtInterceptor implements HandlerInterceptor {
    private static final Logger log = LoggerFactory.getLogger(JwtInterceptor.class);
    private static final String HEADER_AUTH = "Authorization";

    private JwtService jwtService;

    public JwtInterceptor(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        log.debug("{} : {}", request.getMethod(), request.getServletPath());

        // option 요청은 통과
        if (request.getMethod().equals("OPTIONS")) {
            return true;
        } else {
            String jwtToken = request.getHeader("Authorization");
            if (jwtToken!=null && jwtToken.length()>0) {
                //유효한 토큰이면 true, 아닌 경우 예외 발생
                jwtService.checkValid(jwtToken);
                log.trace("[*] 토큰 유효성 확인 : {}", jwtToken);
                return true;
            } else {
                throw new SignatureException("인증 토큰이 없습니다.");
            }
        }
    }
}
