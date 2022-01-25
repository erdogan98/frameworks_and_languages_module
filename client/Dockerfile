FROM node

WORKDIR /workspace/frameworks_and_languages_module/client

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install

COPY . ./

EXPOSE 3000
# Command to run our app
CMD [ "npm", "start" ]