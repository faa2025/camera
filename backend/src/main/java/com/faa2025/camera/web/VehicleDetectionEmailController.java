package com.faa2025.camera.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.faa2025.camera.service.SendEmailService;
import org.springframework.beans.factory.annotation.Value;

@RestController
public class VehicleDetectionEmailController {

    @Value("${destination.email}")
    private String destinationEmail;

    @Autowired
    private SendEmailService sendEmailService;

    @GetMapping("sendVehicleDetectionEmail")
    public String sendVehicleDetectionEmail() {
        sendEmailService.sendEmail(
            destinationEmail, // Replace with the env. variable for customer's email address
            "Alert: A vehicle has been detected in the monitored area. Please check your camera feed for further details.", 
            "Security Camera Alert: Vehicle Detected"
        );
        return "Vehicle detection email notification sent successfully";
    }
}
