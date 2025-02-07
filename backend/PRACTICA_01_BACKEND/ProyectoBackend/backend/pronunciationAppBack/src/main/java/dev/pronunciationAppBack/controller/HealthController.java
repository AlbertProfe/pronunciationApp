package dev.pronunciationAppBack.controller;

import dev.pronunciationAppBack.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

    @RestController
    @RequestMapping("/api/health")
    public class HealthController {

        @Autowired
        private WordService wordService;

        @GetMapping
        public ResponseEntity<Map<String, Object>> healthCheck() {
            Map<String, Object> healthStatus = new HashMap<>();
            healthStatus.put("status", "UP");
            healthStatus.put("timestamp", new Date());
            healthStatus.put("wordCount", wordService.getWordCount());

            // verify database connection
            boolean databaseConnection = checkDatabaseConnection();
            healthStatus.put("database", databaseConnection ? "Connected" : "Disconnected");

            // Add more health checks as needed
            healthStatus.put("memoryUsage", getMemoryUsage());
            healthStatus.put("diskSpace", getDiskSpace());

            HttpHeaders headers = getCommonHeaders("Health check endpoint");
            HttpStatus status = databaseConnection ? HttpStatus.OK : HttpStatus.SERVICE_UNAVAILABLE;

            return new ResponseEntity<>(healthStatus, headers, status);
        }

        private boolean checkDatabaseConnection() {
            try {
                wordService.getAllWords();
                return true;
            } catch (Exception e) {
                return false;
            }
        }

        private Map<String, Long> getMemoryUsage() {
            Runtime runtime = Runtime.getRuntime();
            Map<String, Long> memoryInfo = new HashMap<>();
            memoryInfo.put("total", runtime.totalMemory());
            memoryInfo.put("free", runtime.freeMemory());
            memoryInfo.put("used", runtime.totalMemory() - runtime.freeMemory());
            return memoryInfo;
        }

        private Map<String, Long> getDiskSpace() {
            java.io.File root = new java.io.File("/");
            Map<String, Long> diskInfo = new HashMap<>();
            diskInfo.put("total", root.getTotalSpace());
            diskInfo.put("free", root.getFreeSpace());
            diskInfo.put("usable", root.getUsableSpace());
            return diskInfo;
        }

        private HttpHeaders getCommonHeaders(String description) {
            HttpHeaders headers = new HttpHeaders();
            headers.add("desc", description);
            headers.add("content-type", "application/json");
            headers.add("date", new Date().toString());
            headers.add("server", "Spring Boot");
            headers.add("version", "1.0.0");
            return headers;
        }
    }