package nl.novi.backend.repository;

import nl.novi.backend.domain.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;


@Repository
public interface ProfileRepository extends JpaRepository<Profile, String> {

    @Query(
            value = "SELECT * FROM PROFILE p FULL JOIN APP_USER a ON p.userid = a.id WHERE a.userprofile = ?1",
            nativeQuery = true)
    Collection<Profile> findProfileRentout(String userprofile);

    Optional<Profile> deleteProfileByUserId(Long userid);
}
