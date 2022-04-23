package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.domain.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
