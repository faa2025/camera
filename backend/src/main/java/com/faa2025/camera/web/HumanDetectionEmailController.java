package com.faa2025.camera.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.faa2025.camera.service.SendEmailService;

@RestController
public class HumanDetectionEmailController {

    @Autowired
    private SendEmailService sendEmailService;

    @GetMapping("sendHumanDetectionEmail")
    public String sendHumanDetectionEmail() {
        sendEmailService.sendEmail(
            "nevalainen.jesse92@gmail.com",  //replace with customer's email (as env. variable)
            "Alert: A human has been detected in the monitored area. Please check your camera feed for further details.", 
            "Security Camera Alert: Human Detected"
        );
        return "Human detection email notification sent successfully";
    }
}



