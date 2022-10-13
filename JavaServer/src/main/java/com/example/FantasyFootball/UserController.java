package com.example.FantasyFootball;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepo repo;

    @GetMapping("/api/user")
    public void register(@RequestParam("username") String username, @RequestParam("email") String email, @RequestParam("password") String password, @RequestParam("confirmPassword") String confirmPassword) {
        repo.save(new User(username, email, password));

        // fetch all customers
        System.out.println("Users found with findAll():");
        System.out.println("-------------------------------");
        for (User user : repo.findAll()) {
        System.out.println(user);
        }
        System.out.println();
        return;
    }


    @GetMapping("/api/login")
    public void login(@RequestParam("username") String username, @RequestParam("password") String password) {
        // fetch customer and verify password
        User userLogin = new User(" "," "," ");
        userLogin = repo.findByUsername(username);

        System.out.println(userLogin.getPassword() + " = " + password);

        if(userLogin.getPassword().equals(password)) {
            System.out.println("Login Succesful!");
        }
        else {
            System.out.println("Incorrect Password!");
        }
        return;
    }
}