package com.kbstar.controller;

import org.json.simple.JSONArray;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
public class CenterAjaxImplController {

    @RequestMapping("/getdata01")
    public Object getdata01(){
        JSONArray jsonOuterArray = new JSONArray();
        for(int i=1; i<=500 ; i++){
            JSONArray jsonInnerArray = new JSONArray();
            Random r = new Random();
            int num1 = r.nextInt(10) + 1;
            double num2 = r.nextDouble();
            jsonInnerArray.add(num1);
            jsonInnerArray.add(num2);
            jsonOuterArray.add(jsonInnerArray);
        }
        return jsonOuterArray;
    }
    @RequestMapping("/getdata02")
    public Object chart0302(){
        JSONArray jsonArray = new JSONArray();
        for(int i=1; i<=100 ; i++){
            Random r = new Random();
            double num = Math.floor(r.nextDouble()*10)/10.0;
            jsonArray.add(num);
        }
        return jsonArray;
    }

}
