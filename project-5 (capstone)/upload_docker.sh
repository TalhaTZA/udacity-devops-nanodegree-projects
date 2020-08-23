#!/usr/bin/env bash


dockerpath=talhatza/simple_node_express_api

echo "Docker ID and Image: $dockerpath"

docker tag simple_node_express_api talhatza/simple_node_express_api:v1

docker push talhatza/simple_node_express_api:v1