FROM node:14.17.6-alpine3.13
WORKDIR /app
ADD package*.json ./
run npm install
ADD . .
CMD node index.js