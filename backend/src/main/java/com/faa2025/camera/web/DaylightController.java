package com.faa2025.camera.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.faa2025.camera.service.DaylightCheckerService;

@RestController
@RequestMapping("/api")  
public class DaylightController {
     private final DaylightCheckerService daylightCheckerService;

    public DaylightController(DaylightCheckerService daylightCheckerService) {
        this.daylightCheckerService = daylightCheckerService;
    }

    @GetMapping("/daylight")
    public boolean getDaylightStatus() {
        return daylightCheckerService.getDaylightStatus();  //Returns true or false
    }

}
