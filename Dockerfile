FROM node:8.11.3-alpine
MAINTAINER Anthony Hastings <ar.hastings@gmail.com>

# Specifying build arguments (only available during image creation).
ARG GOOGLE_SITE_VERIFICATION_TOKEN

# Installing bash.
RUN apk add --no-cache bash bash-doc bash-completion

# Create a directory (to house our source files) and navigate to it.
WORKDIR /src

# Copy over the package.json and lock file to the containers working directory.
COPY ./src/package.json ./src/package-lock.json /src/

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

# Copy everything in the host folder into the working folder of the container.
COPY ./src /src/

# Build assets for production.
RUN npm run build

# Run the express server.
CMD npm start