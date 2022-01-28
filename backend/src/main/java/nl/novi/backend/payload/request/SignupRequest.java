package nl.novi.backend.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupRequest {

    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    @NotBlank
    @Size(min = 4, max = 7)
    private String userprofile;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getUserprofile() {
        return userprofile;
    }

    public void setUserprofile(String userprofile) {
        this.userprofile = userprofile;
    }
}
