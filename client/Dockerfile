FROM node:13.12.0-alpine

ENV NODE_ENV development

WORKDIR /client

COPY package*.json ./
COPY yarn.lock .

RUN  npm install --force

COPY . .

RUN npm run build

EXPOSE 3000



# Command to run our app
CMD [ "yarn", "start" ]

