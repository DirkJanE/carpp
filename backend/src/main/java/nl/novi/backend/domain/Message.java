package nl.novi.backend.domain;

import javax.persistence.*;

@Entity
@Table(name = "message")
public class Message {

    @Id
    private Long messageid;
    private String contactid;
    private String message;

    @ManyToOne
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User user;

    public Message () {

    }

    public Message(String contactid, String message) {
        this.contactid = contactid;
        this.message = message;
    }

    public Long getMessageid() {
        return messageid;
    }

    public void setMessageid(Long messageid) {
        this.messageid = messageid;
    }

    public String getContactid() {
        return contactid;
    }

    public void setContactid(String contactid) {
        this.contactid = contactid;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
