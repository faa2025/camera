package com.faa2025.camera.controller;

import org.springframework.core.io.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/videos")
public class VideoController {

    private static final String VIDEO_DIR = "saved_human_clips";

    @GetMapping
    public List<String> listVideos() {
        File folder = new File(VIDEO_DIR);
        File[] files = folder.listFiles((dir, name) -> name.toLowerCase().endsWith(".avi")); // <--- updated here
        if (files == null) return Collections.emptyList();
        return Arrays.stream(files).map(File::getName).toList();
    }

    @GetMapping("/{filename}")
    public ResponseEntity<Resource> getVideo(@PathVariable String filename) throws IOException {
        Path filePath = Paths.get(VIDEO_DIR).resolve(filename).normalize();
        Resource resource = new UrlResource(filePath.toUri());

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        // Force the correct content type for AVI video
        return ResponseEntity.ok()
            .contentType(MediaType.valueOf("video/x-msvideo")) // <-- Important line
            .body(resource);
    }
}
