package com.faa2025.camera.service;

import java.time.ZoneId;
import java.time.ZonedDateTime;

import org.shredzone.commons.suncalc.SunTimes;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class DaylightCheckerService {
    private static final double FINLAND_LATITUDE = 60.1699;
    private static final double FINLAND_LONGITUDE = 24.9384;
    private static final ZoneId FINLAND_ZONE = ZoneId.of("Europe/Helsinki");

    private boolean isDaylight; // Store latest daylight status

    public boolean getDaylightStatus() {
        return isDaylight;
    }

    @Scheduled(fixedRate = 3600000) // Run every hour (every one min:fixedRate = 60000)
    public void checkDaylightPeriodically() {
        ZonedDateTime now = ZonedDateTime.now(FINLAND_ZONE);
        SunTimes sunTimes = SunTimes.compute()
            .on(now.toLocalDate())
            .at(FINLAND_LATITUDE, FINLAND_LONGITUDE)
            .execute();

        isDaylight = now.isAfter(sunTimes.getRise()) && now.isBefore(sunTimes.getSet());
        System.out.println("Daylight status at " + ZonedDateTime.now(FINLAND_ZONE) + ": " + isDaylight);
    }

}
