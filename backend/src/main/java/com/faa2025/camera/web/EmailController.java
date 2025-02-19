package com.faa2025.camera.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.faa2025.camera.service.SendEmailService;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class EmailController {

    //Note, the solution uses "HumanDetectionEmailController" and optionally "VehicleDetectionEmailController" for email notifications 

    @Autowired
    private SendEmailService sendEmailService;

    @GetMapping("sendEmail")
    public String sendEmail(){
        sendEmailService.sendEmail("firstname.lastname@example.com", "Movement detected", "Camera Alert");
        return "Email notification sent succesfully";
    }
    

}
