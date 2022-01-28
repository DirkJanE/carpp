package nl.novi.backend.repository;

import nl.novi.backend.domain.Picture;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface PictureRepository extends JpaRepository<Picture, Long> {
    Picture findByFilename(String filename);
}
