package nl.novi.backend.repository;

import nl.novi.backend.BackendApplication;
import nl.novi.backend.domain.Profile;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ContextConfiguration;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@ContextConfiguration(classes={BackendApplication.class})
@EnableConfigurationProperties
public class TestProfileRepository {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ProfileRepository profileRepository;

    @Test
    void testFindProfileRentOut() {
        // given
        Profile profile = new Profile();
        entityManager.persist(profile);
        entityManager.flush();

        // when
        Profile found = (Profile) profileRepository.findProfileRentout("rentout");

        // then
        int expected = 1;
        Long actual = found.getProfileid();

        assertEquals(expected, actual);
    }
}
