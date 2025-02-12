package com.faa2025.camera;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import io.github.cdimascio.dotenv.Dotenv;
import javax.annotation.PostConstruct;

@SpringBootApplication
@EnableScheduling
public class CameraApplication {

	@PostConstruct
	public void init() {
		Dotenv dotenv = Dotenv.load();
		dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
	}

	public static void main(String[] args) {
		SpringApplication.run(CameraApplication.class, args);
	}

}
