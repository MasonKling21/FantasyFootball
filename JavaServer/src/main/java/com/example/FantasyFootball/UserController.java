package com.example.FantasyFootball;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.io.UnsupportedEncodingException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.Base64;

@RestController
public class UserController {

    @Autowired
    private UserRepo repo;

    @GetMapping("/api/user")
    public void register(@RequestParam("username") String username, @RequestParam("email") String email, @RequestParam("password") String password, @RequestParam("confirmPassword") String confirmPassword) throws NoSuchAlgorithmException, InvalidKeySpecException {

        if(!password.equals(confirmPassword)) {
            System.out.println("Passwords don't match");
            return;
        }

        SecureRandom secureRandom = new SecureRandom();
        byte[] salt = secureRandom.generateSeed(12);

        PBEKeySpec pbeKeySpec = new PBEKeySpec(password.toCharArray(), salt, 10, 512);
        SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA512");
        byte[] hash = skf.generateSecret(pbeKeySpec).getEncoded();

        String base64Hash = Base64.getMimeEncoder().encodeToString(hash);
        String base64Salt = Base64.getMimeEncoder().encodeToString(salt);

        repo.save(new User(username, email, base64Hash, base64Salt));

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
    public void login(@RequestParam("username") String username, @RequestParam("password") String password) throws NoSuchAlgorithmException, InvalidKeySpecException, UnsupportedEncodingException {
        // fetch customer and verify password
        User userLogin = repo.findByUsername(username);

        byte[] salt = Base64.getDecoder().decode(new String(userLogin.getSalt()).getBytes("UTF-8"));

        PBEKeySpec pbeKeySpec = new PBEKeySpec(password.toCharArray(), salt, 10, 512);
        SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA512");
        byte[] hash = skf.generateSecret(pbeKeySpec).getEncoded();

        String base64Hash = Base64.getMimeEncoder().encodeToString(hash);

        if(base64Hash.equals(userLogin.getPassword())) {
            System.out.println("Login Succesful!");
        }
        else {
            System.out.println("Incorrect Password!");
        }
        return;
    }


    @GetMapping("/api/delete")
    public void delete(@RequestParam("username") String username, @RequestParam("password") String password) throws NoSuchAlgorithmException, InvalidKeySpecException, UnsupportedEncodingException {
        // fetch customer and verify password
        User userLogin = repo.findByUsername(username);

        byte[] salt = Base64.getDecoder().decode(new String(userLogin.getSalt()).getBytes("UTF-8"));

        PBEKeySpec pbeKeySpec = new PBEKeySpec(password.toCharArray(), salt, 10, 512);
        SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA512");
        byte[] hash = skf.generateSecret(pbeKeySpec).getEncoded();

        String base64Hash = Base64.getMimeEncoder().encodeToString(hash);

        if(base64Hash.equals(userLogin.getPassword())) {
            repo.deleteByUsername(userLogin.getUsername());
            System.out.println("Account deleted!");
        }
        else {
            System.out.println("Error deleting account!");
        }
        return;
    }
}