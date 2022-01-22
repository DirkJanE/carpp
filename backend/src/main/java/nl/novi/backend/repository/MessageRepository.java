package nl.novi.backend.repository;

import nl.novi.backend.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    Boolean findByContactid(Long contactid);
}
