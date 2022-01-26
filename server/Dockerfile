FROM node:13.12.0-alpine

WORKDIR /server

COPY package*.json ./server

COPY . .

RUN npm install

EXPOSE 8000

CMD ["node", "index.js"]
