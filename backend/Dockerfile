FROM node:10.16.0
COPY package.json /src/package.json
RUN  cd /src; npm install
COPY . /src
EXPOSE 8080
WORKDIR /src

CMD node bin/www