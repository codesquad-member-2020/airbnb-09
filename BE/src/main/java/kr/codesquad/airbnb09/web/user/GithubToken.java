package kr.codesquad.airbnb09.web.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.ToString;
import org.springframework.stereotype.Component;

@ToString
@Component
public class GithubToken {
    @JsonProperty("access_token")
    private String accessToken;
    @JsonProperty("token_type")
    private String tokenType;
    @JsonProperty("scope")
    private String scope;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public String getAuthorizationValue() {
        return this.tokenType + " " + this.accessToken;
    }
}
