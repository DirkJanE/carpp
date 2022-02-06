package nl.novi.backend.repository;

import nl.novi.backend.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    @Query(
            value = "SELECT * FROM MESSAGE m WHERE (m.userid = ?1 AND m.contactname= ?2) OR (m.userid = ?3 AND m.contactname = ?4)",
            nativeQuery = true)
            Collection<Message> findAllMessages(Long userid, String contactname, Long contactid, String username);

        }
