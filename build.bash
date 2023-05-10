#!/bin/bash

#docker run -v "./mongoDbDataVolume:/data/db" -d mongo

docker run -v mongo:/data/db -d -p 27017:27017 mongo 