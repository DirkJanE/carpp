package nl.novi.backend.repository;

import nl.novi.backend.domain.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
    Long findByProfileid(Long profileid);
}
