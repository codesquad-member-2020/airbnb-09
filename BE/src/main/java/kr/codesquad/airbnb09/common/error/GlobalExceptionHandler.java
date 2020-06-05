package kr.codesquad.airbnb09.common.error;

import com.fasterxml.jackson.core.io.JsonEOFException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(SignatureException.class)
    public ResponseEntity<String> handleSignatureException(SignatureException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("유효하지 않은 토큰값입니다.");
    }

    @ExceptionHandler(JsonEOFException.class)
    public ResponseEntity<String> handleJsonEOFException(JsonEOFException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("잘못된 JSON 형식입니다.");
    }

    @ExceptionHandler(TokenNotFoundException.class)
    public ResponseEntity<String> handleTokenNotFoundException(TokenNotFoundException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }
}
