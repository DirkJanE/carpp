package nl.novi.backend.repository;

import nl.novi.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);

    @Query(
            value = "SELECT a.id, a.username FROM APP_USER a",
            nativeQuery = true)
    List findAllUsers();

}
