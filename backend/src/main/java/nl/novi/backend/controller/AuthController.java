package nl.novi.backend.controller;

import nl.novi.backend.payload.request.LoginRequest;
import nl.novi.backend.payload.request.SignupRequest;
import nl.novi.backend.payload.response.JwtResponse;
import nl.novi.backend.payload.response.MessageResponse;
import nl.novi.backend.service.AuthorizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    AuthorizationService authorizationService;

    @Autowired
    public void AuthController(AuthorizationService authorizationService) {
        this.authorizationService = authorizationService;
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {
        return authorizationService.authenticateUser(loginRequest);
    }

    @PostMapping("/signup")
    public ResponseEntity<MessageResponse> registerUser(@RequestBody SignupRequest signUpRequest) {
        return authorizationService.registerUser(signUpRequest);
    }

    @GetMapping("/getuser/{name}")
    public ResponseEntity<Object> getUser(@PathVariable String name) {
        return ResponseEntity.ok().body(authorizationService.getUser(name));
    }

    @GetMapping("/getallusers")
    public ResponseEntity<Object> getAllUsers() {
        return ResponseEntity.ok().body(authorizationService.getAllUsers());
    }
}
