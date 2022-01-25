FROM node

WORKDIR /frameworks_and_languages_module/server/

COPY package*.json ./server

COPY . .

RUN npm install

EXPOSE 8000

CMD ["node", "index.js"]
