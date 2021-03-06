#!/bin/bash

# build the app container
docker build -t mueees/simple-express-docker .

# create the network
docker network create expressapp

# start the database(mongodb) container
docker run -d --net expressapp -p 27017:27017 -p 27018:27018 --name database mongo

# start the app container
docker run -d --net expressapp -p 7777:7777 --name simple-express-docker mueees/simple-express-docker