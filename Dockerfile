FROM node:carbon

WORKDIR /mongodb

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
