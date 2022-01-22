package nl.novi.backend.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    private long contactid;

    private String message;

    public Message () {

    }

    public Message(long contactid, String message) {
        this.contactid = contactid;
        this.message = message;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getContactId() {
        return contactid;
    }

    public void setContactId(long fromid) {
        this.contactid = contactid;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
