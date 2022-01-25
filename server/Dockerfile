<<<<<<< HEAD
FROM node

WORKDIR /frameworks_and_languages_module/server/

COPY package*.json ./server

COPY . .

RUN npm install

EXPOSE 8000

CMD ["node", "index.js"]
=======
FROM node:latest

WORKDIR /server/

COPY package.json ./server

RUN npm start

COPY . .

ENTRYPOINT ["node", " app.js"]
>>>>>>> 5cbe577c1edc9e7563be3459bff27a06b62cac9b
