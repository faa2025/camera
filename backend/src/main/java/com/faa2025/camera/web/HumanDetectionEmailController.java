package com.faa2025.camera.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.faa2025.camera.service.SendEmailService;
import org.springframework.beans.factory.annotation.Value;

@RestController
public class HumanDetectionEmailController {

    @Value("${destination.email}")
    private String destinationEmail;

    @Autowired
    private SendEmailService sendEmailService;

    @GetMapping("sendHumanDetectionEmail")
    public String sendHumanDetectionEmail() {
        sendEmailService.sendEmail(
            destinationEmail,  // Replace with the env. variable for customer's email address
            "Alert: A human has been detected in the monitored area. Please check your camera feed for further details.", 
            "Security Camera Alert: Human Detected"
        );
        return "Human detection email notification sent successfully";
    }
}



