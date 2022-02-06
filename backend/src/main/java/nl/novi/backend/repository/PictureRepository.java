package nl.novi.backend.repository;

import nl.novi.backend.domain.Picture;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface PictureRepository extends JpaRepository<Picture, Long> {
    Optional<Picture> findByUserid(Long userid);
    Optional<Picture> deleteByUserid(Long userid);
}
