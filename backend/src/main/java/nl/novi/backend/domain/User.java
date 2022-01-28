package nl.novi.backend.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "app_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @NotBlank
    @Size(max = 25)
    private String username;

    @NotBlank
    @Size(max = 125)
    private String password;

    @NotBlank
    @Size(min = 4, max = 7)
    private String userprofile;

    @OneToOne(mappedBy = "user")
    @JsonManagedReference
    private Profile profile;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Message> message;

    public User() {
    }

    public User(String username, String password, String userprofile) {
        this.username = username;
        this.password = password;
        this.userprofile = userprofile;
    }

    public Long getUserid() {
        return id;
    }

    public void setUserid(Long id) {
        this.id = id;
    }

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

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }

    public List<Message> getMessage() {
        return message;
    }

    public void setMessage(List<Message> message) {
        this.message = message;
    }


}
