FROM node:14.17.0-slim AS base

LABEL maintainer="Anthony Hastings <ar.hastings@gmail.com>"

ARG GOOGLE_SITE_VERIFICATION_TOKEN

WORKDIR /dishonored

RUN apt-get update && apt-get install bash time -y && apt-get clean

COPY ./package.json ./yarn.lock ./

RUN yarn install && yarn cache clean

COPY . ./

RUN yarn build

FROM node:14.17.0-alpine AS server

RUN apk add --no-cache bash

USER node

WORKDIR /home/node

COPY --from=base --chown=node /dishonored/package.json /dishonored/yarn.lock ./

RUN yarn install --production && yarn cache clean

COPY --from=base --chown=node /dishonored/dist ./dist

COPY --from=base --chown=node /dishonored/server ./server

COPY --from=base --chown=node /dishonored/support ./support

CMD yarn start