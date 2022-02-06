package nl.novi.backend.service;

import nl.novi.backend.domain.Profile;
import nl.novi.backend.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
@Validated
public class ProfileService {

    private ProfileRepository profileRepository;

    @Autowired
    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public long writeProfile(Profile profile) {

        Profile newProfile = profileRepository.save(profile);

        return newProfile.getProfileid();
    }

    public Collection<Profile> getRentoutProfiles() {

        String rentout = "rentout";

        return profileRepository.findProfileRentout(rentout);
    }

    @Transactional
    public void deleteProfile(Long id) {

        profileRepository.deleteProfileByUserId(id);

    }
}





