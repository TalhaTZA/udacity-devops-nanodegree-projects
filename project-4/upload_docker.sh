#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

# Step 1:
# Create dockerpath
# dockerpath=<your docker ID/path>
dockerpath=talhatza/house_prediction_api

# Step 2:  
# Authenticate & tag
echo "Docker ID and Image: $dockerpath"
docker tag house_prediction_api talhatza/house_prediction_api:v1

# Step 3:
# Push image to a docker repository
docker push talhatza/house_prediction_api:v1