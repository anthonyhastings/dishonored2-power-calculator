FROM node:12.5.0-alpine

LABEL maintainer="Anthony Hastings <ar.hastings@gmail.com>"

# Specifying build arguments (only available during image creation/build).
ARG GOOGLE_SITE_VERIFICATION_TOKEN

# Create a directory and navigate to it.
WORKDIR /dishonored2-power-calculator

# Installing bash.
RUN apk add --no-cache bash

# Copy over the package.json and lock file to the containers working directory.
COPY ./package.json ./package-lock.json ./

# Install build dependencies (required for imagemin), install packages then delete build dependencies.
# This is all done in the same command / layer so when it caches, it won't bloat the image size.
RUN apk add --no-cache --virtual image-build-deps \
    autoconf \
    automake \
    gcc \
    g++ \
    libc-dev \
    libtool \
    make \
    python \
    nasm \
    && apk add --no-cache libpng-dev \
    && npm install \
    && apk del image-build-deps

# Copy everything (that hasn't been ignored by dockerignore) in the host folder into the working folder.
COPY . ./

# Build assets for production.
RUN npm run build

# Run the express server.
CMD npm start