FROM node:latest

WORKDIR /server/

COPY package.json ./server

RUN npm start

COPY . .

ENTRYPOINT ["node", " app.js"]
