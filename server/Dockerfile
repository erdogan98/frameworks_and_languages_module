FROM node:latest

WORKDIR /server/

COPY package.json ./server

RUN npm install

COPY . .

ENTRYPOINT ["node", "application.js"]
