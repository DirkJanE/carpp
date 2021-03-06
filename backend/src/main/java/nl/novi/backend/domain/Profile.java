package nl.novi.backend.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "profile")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long profileid;
    private String searchprize;
    private String searchdistance;
    private String searchbrand;
    private String lat;
    private String lon;
    private String brandtype;
    private Double rentprize;

    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User user;

    public Profile() {

    }

    public Profile(String searchprize, String searchdistance, String searchbrand, String lat, String lon, String brandtype, Double rentprize) {
        this.searchprize = searchprize;
        this.searchdistance = searchdistance;
        this.searchbrand = searchbrand;
        this.lat = lat;
        this.lon = lon;
        this.brandtype = brandtype;
        this.rentprize = rentprize;
    }

    public Long getProfileid() {
        return profileid;
    }

    public void setProfileid(Long profileid) {
        this.profileid = profileid;
    }

    public String getSearchprize() {
        return searchprize;
    }

    public void setSearchprize(String searchprize) {
        this.searchprize = searchprize;
    }

    public String getSearchdistance() {
        return searchdistance;
    }

    public void setSearchdistance(String searchdistance) {
        this.searchdistance = searchdistance;
    }

    public String getSearchbrand() {
        return searchbrand;
    }

    public void setSearchbrand(String searchbrand) {
        this.searchbrand = searchbrand;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLon() {
        return lon;
    }

    public void setLon(String lon) {
        this.lon = lon;
    }

    public String getBrandtype() {
        return brandtype;
    }

    public void setBrandtype(String brandtype) {
        this.brandtype = brandtype;
    }

    public Double getRentprize() {
        return rentprize;
    }

    public void setRentprize(Double rentprize) {
        this.rentprize = rentprize;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
