FROM node:14.13.0-alpine AS base

LABEL maintainer="Anthony Hastings <ar.hastings@gmail.com>"

ARG GOOGLE_SITE_VERIFICATION_TOKEN

WORKDIR /dishonored

RUN apk add --no-cache bash

COPY ./package.json ./yarn.lock ./

# Install build dependencies (required for imagemin), install packages, clears cache then delete build dependencies.
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
    libpng-dev \
    && yarn install \
    && yarn cache clean \
    && apk del image-build-deps

COPY . ./

RUN yarn build

FROM node:14.13.0-alpine AS server

USER node

WORKDIR /home/node

COPY --from=base --chown=node /dishonored/package.json /dishonored/yarn.lock ./

RUN yarn install --production && yarn cache clean

COPY --from=base --chown=node /dishonored/dist ./dist

COPY --from=base --chown=node /dishonored/server ./server

COPY --from=base --chown=node /dishonored/support ./support

CMD yarn start