package com.example.FantasyFootball;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
    public User findByUsername(String username);
    void deleteByUsername(String Username);
}