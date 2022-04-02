package nl.novi.backend.controller;

import nl.novi.backend.domain.Profile;
import nl.novi.backend.service.ProfileService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
@EnableConfigurationProperties
public class TestProfileController {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private ProfileService profileService;

    @Test
    public void testWriteProfile() throws Exception {

        Profile profile = new Profile("0", "0", "20", "52.000", "5.0000", "Volkswagen Polo", 75.00);

        List<Profile> rentoutProfiles = Arrays.asList(profile);

        given(profileService.getRentoutProfiles()).willReturn(rentoutProfiles);

        mvc.perform(get("/readrentout")
                        .contentType(MediaType.APPLICATION_JSON))
                        .andExpect(status().isOk())
                        .andExpect(jsonPath("$", hasSize(7)))
                        .andExpect(jsonPath("$[0].searchprize", is("0")));

    }
}
