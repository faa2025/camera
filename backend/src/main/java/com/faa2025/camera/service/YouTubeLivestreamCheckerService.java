package com.faa2025.camera.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.logging.Logger;
import reactor.core.publisher.Mono;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class YouTubeLivestreamCheckerService {

    private static final Logger logger = Logger.getLogger(YouTubeLivestreamCheckerService.class.getName());

    @Value("${youtube.api.key}")
    private String apiKey;

    @Value("${youtube.video.id}")
    private String videoId;

    @Value("${destination.email}")
    private String destinationEmail;

    private final WebClient webClient;
    private final SendEmailService sendEmailService;
    private boolean notificationSent = false; // Prevent duplicate notifications

    public YouTubeLivestreamCheckerService(WebClient.Builder webClientBuilder, SendEmailService sendEmailService) {
        this.webClient = webClientBuilder.baseUrl("https://www.googleapis.com").build();
        this.sendEmailService = sendEmailService;
    }

    @Scheduled(fixedRate = 60000) // Check every 60 seconds
    public void checkLivestreamStatus() {
        String url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoId +
                "&part=snippet,status&key=" + apiKey;

        Mono<String> responseMono = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class);

        responseMono.subscribe(response -> {
            //logger.info("YouTube API response: " + response);
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode rootNode = objectMapper.readTree(response);
                JsonNode itemsNode = rootNode.path("items");
                if (itemsNode.isArray() && itemsNode.size() > 0) {
                    JsonNode liveBroadcastContentNode = itemsNode.get(0).path("snippet").path("liveBroadcastContent");
                    String liveBroadcastContent = liveBroadcastContentNode.asText();
                    if (!"live".equals(liveBroadcastContent)) {
                        if (!notificationSent) {
                            sendEmailService.sendEmail(
                                    destinationEmail,
                                    "The livestream is down. Please check the link: https://www.youtube.com/watch?v=" + videoId,
                                    "YouTube Livestream Alert");
                            notificationSent = true;
                            logger.warning("Livestream down! Email notification sent.");
                        }
                    } else {
                        notificationSent = false;
                        logger.info("Livestream is up! No notification sent.");
                    }
                } else {
                    logger.warning("No items found in the YouTube API response.");
                }
            } catch (Exception e) {
                logger.severe("Error parsing YouTube API response: " + e.getMessage());
            }
        }, error -> logger.severe("Error checking livestream status: " + error.getMessage()));
    }
}