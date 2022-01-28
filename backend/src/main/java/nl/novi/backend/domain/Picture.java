package nl.novi.backend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Picture {

    @Id
    private Long id;

    private String filename;

    private Long userid;



public Picture () {

}

public Picture (String filename, Long userid) {
        this.filename = filename;
        this.userid = userid;
}


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return filename;
    }

    public void setFileName(String filename) {
        this.filename = filename;
    }


    public Long getUserId() {
        return userid;
    }

    public Long setUserId(Long userid) {
        this.userid = userid;
        return userid;
    }
}
