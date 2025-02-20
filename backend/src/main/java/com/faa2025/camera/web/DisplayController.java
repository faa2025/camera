package com.faa2025.camera.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//For testing purposes, displays a landing page for the SpringBoot application. 

@Controller
@ResponseBody
public class DisplayController {

    @RequestMapping("/")
    public String displayBackend() {
        return "Hello, this is the backend side of the camera project";
    }

}
