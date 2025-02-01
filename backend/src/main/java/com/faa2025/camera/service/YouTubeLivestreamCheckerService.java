package com.faa2025.camera.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.logging.Logger;

@Service
public class YouTubeLivestreamCheckerService {

    private static final Logger logger = Logger.getLogger(YouTubeLivestreamCheckerService.class.getName());

    @Value("${youtube.api.key}")
    private String apiKey;

    @Value("${youtube.video.id}")
    private String videoId;

    private final RestTemplate restTemplate;
    private final SendEmailService sendEmailService;
    private boolean notificationSent = false; // Prevent duplicate notifications

    public YouTubeLivestreamCheckerService(RestTemplate restTemplate, SendEmailService sendEmailService) {
        this.restTemplate = restTemplate;
        this.sendEmailService = sendEmailService;
    }

    @Scheduled(fixedRate = 60000) // Check every 60 seconds
    public void checkLivestreamStatus() {
        String url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoId +
                     "&part=snippet,status&key=" + apiKey;
        
        try {
            String response = restTemplate.getForObject(url, String.class);

            if (response == null || !response.contains("\"liveBroadcastContent\":\"live\"")) {
                if (!notificationSent) {
                    sendEmailService.sendEmail(
                        "nevalainen.jesse92@gmail.com", 
                        "The livestream is down. Please check the link: https://www.youtube.com/watch?v=" + videoId, 
                        "YouTube Livestream Alert"
                    );
                    notificationSent = true; // Avoid duplicate alerts
                    logger.warning("Livestream down! Email notification sent.");
                }
            } else {
                notificationSent = false; // Reset when stream is live again
            }
        } catch (Exception e) {
            logger.severe("Error checking livestream status: " + e.getMessage());
        }
    }

}
