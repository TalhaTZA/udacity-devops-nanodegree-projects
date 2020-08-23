#!/usr/bin/env bash

cd app

docker build --tag=simple_node_express_api .

docker image ls

docker run -p 8000:80 simple_node_express_api