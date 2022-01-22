package nl.novi.backend.service;

import nl.novi.backend.domain.Message;
import nl.novi.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public long createMessage(Message message) {

        Message newMessage = messageRepository.save(message);

        return newMessage.getId();
    }
}


