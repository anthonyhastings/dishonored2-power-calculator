FROM mhart/alpine-node:8.1.4
MAINTAINER Anthony Hastings <ar.hastings@gmail.com>

# Create a directory (to house our source files) and navigate to it.
WORKDIR /src

# Copy over the package.json file to the containers working directory.
COPY ./src/package.json ./src/package-lock.json /src/

# Install our desired node packages.
RUN npm install

# Copy everything in the host folder into the working folder of the container.
COPY ./src/ /src/

# Run the express server when creating/starting a container.
CMD ["npm", "start"]
