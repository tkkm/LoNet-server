FROM node:14.2.0-slim

RUN apt update \
    && apt install -y \
        git \
    && apt clean

RUN npm install -g @aws-amplify/cli

RUN mkdir /workspace
