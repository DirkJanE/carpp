package nl.novi.backend.repository;

import nl.novi.backend.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    @Query(
            value = "SELECT * FROM MESSAGE u WHERE u.userid = ?1",
            nativeQuery = true)
    Collection<Message> findAllMessages(Long userid);
}
