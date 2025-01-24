package com.faa2025.camera;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import org.shredzone.commons.suncalc.SunTimes;
public class DaylightChecker {
    // Coordinates for Helsinki, Finland
    private static final double FINLAND_LATITUDE = 60.1699;
    private static final double FINLAND_LONGITUDE = 24.9384;
    // Timezone for Helsinki, Finland
    private static final ZoneId FINLAND_ZONE = ZoneId.of("Europe/Helsinki");
    // Check if it is daylight in Helsinki, Finland returns true if it is daylight
    public static boolean isDaylight() {
        ZonedDateTime now = ZonedDateTime.now(FINLAND_ZONE);
        SunTimes sunTimes = SunTimes.compute()
            .on(now.toLocalDate())
            .at(FINLAND_LATITUDE, FINLAND_LONGITUDE)
            .execute();
        return now.isAfter(sunTimes.getRise()) && now.isBefore(sunTimes.getSet());
    }
}
