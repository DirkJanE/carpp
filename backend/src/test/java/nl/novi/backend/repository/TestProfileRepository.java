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
        Profile profile = new Profile("0", "0", "20", "52.000", "5.0000", "Volkswagen Polo", 75.00);
        entityManager.persist(profile);
        entityManager.flush();


        // when
        Profile found = (Profile) profileRepository.findProfileRentout("1");


        // then
        String expected = "0";
        String actual = found.getSearchprize();
        assertEquals(expected, actual);
    }
}
