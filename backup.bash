#!/bin/bash
docker exec b2a6c6501cc4 sh -c 'exec mongodump -d strava --archive' > ./strava.archive