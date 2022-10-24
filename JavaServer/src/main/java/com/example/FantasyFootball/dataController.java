package com.example.FantasyFootball;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.net.URL;
import java.io.File;
import java.io.IOException;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;

@RestController
public class dataController {
    
    @RequestMapping(value = "/data", method = RequestMethod.GET)
    public JSONObject sendData() throws ParseException, IOException {
        JSONParser parser = new JSONParser();
        URL path = dataController.class.getResource("data.json");
        File file = new File(path.getFile());
        Object obj = parser.parse(new FileReader(file));
        JSONObject data = (JSONObject)obj;

        return data;
    }

}
