#!/bin/bash
docker exec e69f0b77189e sh -c 'exec mongodump -d strava --archive' > ./strava.archive