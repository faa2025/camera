package com.faa2025.camera.controller;

import org.springframework.core.io.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;

@RestController
@RequestMapping("/api/images")
@CrossOrigin(origins = "*") // Add CORS as needed
public class ImageController {

    private static final String IMAGE_DIR = "saved_human_frame";

    @GetMapping
    public List<String> listImages() {
        File folder = new File(IMAGE_DIR);
        File[] files = folder.listFiles((dir, name) ->
            name.toLowerCase().endsWith(".jpg") ||
            name.toLowerCase().endsWith(".png") ||
            name.toLowerCase().endsWith(".jpeg")
        );
        if (files == null) return Collections.emptyList();
        return Arrays.stream(files).map(File::getName).toList();
    }

    @GetMapping("/{filename}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) throws IOException {
        Path filePath = Paths.get(IMAGE_DIR).resolve(filename).normalize();
        Resource resource = new UrlResource(filePath.toUri());

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
            .contentType(MediaTypeFactory.getMediaType(resource).orElse(MediaType.IMAGE_JPEG))
            .body(resource);
    }
}
