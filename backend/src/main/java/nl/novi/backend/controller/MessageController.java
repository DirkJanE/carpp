package nl.novi.backend.controller;

import nl.novi.backend.domain.Message;
import nl.novi.backend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    MessageService messageService;

    @PostMapping("/newmessage/{id}")
    public ResponseEntity<Object> newMessage(@RequestBody Message message) {

        long newMessage = messageService.createMessage(message);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newMessage).toUri();

            return ResponseEntity.created(location).body(location);
        }
    }

