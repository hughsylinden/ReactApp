package com.example.demo.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Message;
import com.example.demo.repositories.MessageRepository;

@RestController
@RequestMapping("/messages")
@CrossOrigin
public class MessageController {

    private final MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping
    public List<Message> getMessage() {
        return messageRepository.findAll();
    }

    @GetMapping("/{id}")
    public Message getMessage(@PathVariable Long id) {
        return messageRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createMessage(@RequestBody Message message) throws URISyntaxException {
        Message savedMessage = messageRepository.save(message);
        return ResponseEntity.created(new URI("/messages/" + savedMessage.getId())).body(savedMessage);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateMessage(@PathVariable Long id, @RequestBody Message message) {
        Message currentMessage = messageRepository.findById(id).orElseThrow(RuntimeException::new);
        currentMessage.setName(message.getName());
        currentMessage.setBody(message.getBody());
        currentMessage = messageRepository.save(message);

        return ResponseEntity.ok(currentMessage);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteMessage(@PathVariable Long id) {
        messageRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}