package nl.novi.backend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Picture {

    @Id
    @GeneratedValue
    private Long id;

    private String filename;

    @Lob
    private byte[] docFile;

    private Long userid;

public Picture () {

}

public Picture (Long id, String filename, byte[] docFile) {
        this.id = id;
        this.filename = filename;
        this.docFile = docFile;
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

    public byte[] getDocFile() {
        return docFile;
    }

    public void setDocFile(byte[] docFile) {
        this.docFile = docFile;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }
}
