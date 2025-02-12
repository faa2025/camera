#!/bin/bash

#This script triggers "echo_camera.sh"

# API Endpoint of your Spring Boot application (replace with actual URL)
API_URL="http://our-deployed-backend/api/daylight"

# Path to the script that prints "It is daylight"
SCRIPT_TO_RUN="./echo_camera.sh"

# Check API response
response=$(curl -s "$API_URL")

if [[ "$response" == "true" ]]; then
    # If true and script is not running, start it
    if ! pgrep -f "$SCRIPT_TO_RUN" > /dev/null; then
        echo "Starting script..."
        nohup bash "$SCRIPT_TO_RUN" &>/dev/null &
    fi
else
    # If false and script is running, stop it
    if pgrep -f "$SCRIPT_TO_RUN" > /dev/null; then
        echo "Stopping script..."
        pkill -f "$SCRIPT_TO_RUN"
    fi
fi
