package com.example.FantasyFootball;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.net.URL;
import java.util.Scanner;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import com.google.gson.Gson; 
import com.google.gson.GsonBuilder;  


@RestController
public class dataController {
    
    @RequestMapping(value = "/api/data.json", method = RequestMethod.GET)
    @CrossOrigin
    public String sendData() throws IOException {
        // Get current working directory so we can grab data.json
        URL path = dataController.class.getResource("data4.json");

        // Get file and convert it to JSONObject
        File file = new File(path.getFile());

        Scanner scan = new Scanner(file);
        scan.useDelimiter("\\Z");
        String content = scan.next();
        
        return content;
    }

}
