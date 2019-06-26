FROM keymetrics/pm2:latest-alpine

COPY package.json /src/package.json
RUN  cd /src; npm install

# Bundle APP files
COPY . /src
EXPOSE 3005
WORKDIR /src


# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2.json" ]