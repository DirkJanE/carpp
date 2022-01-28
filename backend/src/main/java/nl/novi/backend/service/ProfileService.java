package nl.novi.backend.service;

import nl.novi.backend.domain.Profile;
import nl.novi.backend.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.Collection;

@Service
@Validated
public class ProfileService {

    private ProfileRepository profileRepository;

    @Autowired
    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public long createProfile(Profile profile) {

        Profile newProfile = profileRepository.save(profile);

        return newProfile.getProfileid();
    }

    public Collection<Profile> getLocation() {

        return profileRepository.findAll();
    }
}





