FROM node:16.13.1-slim

ENV TZ Asis/Tokyo

RUN apt -y update && apt  -y upgrade && apt -y install \
        bash curl git procps

RUN npm install -g npm @nestjs/cli