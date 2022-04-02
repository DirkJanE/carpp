package nl.novi.backend.controller;

import nl.novi.backend.domain.Message;
import nl.novi.backend.payload.response.MessageResponse;
import nl.novi.backend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/message")
public class MessageController {

    MessageService messageService;

    @Autowired
    public void MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PutMapping("/add")
    public ResponseEntity<Object> addMessage(@RequestBody Message message) {

        try {
            long newMessage = messageService.createMessage(message);
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Message uploaded, id: " + newMessage));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse("Message not uploaded."));
        }
    }

    @GetMapping("/read/{userid}/{contactname}/{contactid}/{username}")
    public Collection<Message> getMessage(@PathVariable Long userid, @PathVariable String contactname, @PathVariable Long contactid, @PathVariable String username) {
        return messageService.getMessage(userid, contactname, contactid, username);
    }

}

