FROM node:20.11.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g sequelize-cli && npm install -g nodemon

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev:docker" ]