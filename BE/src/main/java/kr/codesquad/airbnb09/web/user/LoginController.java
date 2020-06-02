package kr.codesquad.airbnb09.web.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

@RequestMapping("/login")
@RestController
public class LoginController {
    private static final Logger log = LoggerFactory.getLogger(LoginController.class);

    private LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/oauth2/github")
    public ResponseEntity<String> githubLogin(@PathParam("code") String code, HttpServletResponse response) {
        log.debug("code : {}", code);
        String jwtToken = loginService.loginAsGithub(code);
        return ResponseEntity.ok(jwtToken);
    }
}
