package com.example.FantasyFootball;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.net.URL;
import java.io.File;
import java.io.IOException;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.*;


@RestController
public class dataController {
    
    @RequestMapping(value = "/api/data.json", method = RequestMethod.GET)
    @CrossOrigin
    public JSONArray sendData() throws ParseException, IOException {
        JSONParser parser = new JSONParser();

        // Get current working directory so we can grab data.json
        URL path = dataController.class.getResource("data.json");

        // Get file and convert it to JSONObject
        File file = new File(path.getFile());
        Object obj = parser.parse(new FileReader(file));
        JSONObject data = (JSONObject)obj;

        return (JSONArray) data.get("players");
    }

}
