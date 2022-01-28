package nl.novi.backend.service;

import nl.novi.backend.domain.Message;
import nl.novi.backend.repository.MessageRepository;
import nl.novi.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class MessageService {

    private MessageRepository messageRepository;

    private UserRepository userRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository, UserRepository userRepository) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
    }

    public long createMessage(Message message) {

        Message newMessage = messageRepository.save(message);
        return newMessage.getMessageid();
    }

    public Collection<Message> getMessage(Long userid) {
        return messageRepository.findAllMessages(userid);
    }
}


