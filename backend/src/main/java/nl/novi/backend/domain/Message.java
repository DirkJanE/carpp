package nl.novi.backend.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long messageid;
    private String contactname;
    private String message;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User user;

    public Message () {

    }

    public Message(String contactname, String message) {
        this.contactname = contactname;
        this.message = message;
    }

    public Long getMessageid() {
        return messageid;
    }

    public void setMessageid(Long messageid) {
        this.messageid = messageid;
    }

    public String getContactname() {
        return contactname;
    }

    public void setContactname(String contactname) {
        this.contactname = contactname;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUserid() {
        return user;
    }

    public void setUserid(User user) {
        this.user = user;
    }
}
