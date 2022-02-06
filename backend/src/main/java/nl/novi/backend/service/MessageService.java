package nl.novi.backend.service;

import nl.novi.backend.domain.Message;
import nl.novi.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class MessageService {

    private MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
     }

    public long createMessage(Message message) {

        Message newMessage = messageRepository.save(message);
        return newMessage.getMessageid();
    }

    public Collection<Message> getMessage(Long userid, String contactname, Long contactid, String username) {
        return messageRepository.findAllMessages(userid, contactname, contactid, username);
    }
}


