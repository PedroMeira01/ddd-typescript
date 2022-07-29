FROM node:latest

WORKDIR /usr/src/app

COPY ./app /usr/src/app

RUN chmod a+rw -R .

RUN npm install