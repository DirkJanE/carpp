package nl.novi.backend.controller;

import nl.novi.backend.domain.Profile;
import nl.novi.backend.payload.response.MessageResponse;
import nl.novi.backend.repository.UserRepository;
import nl.novi.backend.service.AuthorizationService;
import nl.novi.backend.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    ProfileService profileService;

    @Autowired
    public void ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @PutMapping("/newprofile")
    public ResponseEntity<Object> newProfile(@RequestBody Profile profile) {

        try {
            long newProfile = profileService.createProfile(profile);
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Profile uploaded, id: " + newProfile));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse("Profile not uploaded"));
        }
    }

    @GetMapping("/getlocation")
    public ResponseEntity<Object> getLocation() {

        return ResponseEntity.ok().body(profileService.getLocation());
    }
}
