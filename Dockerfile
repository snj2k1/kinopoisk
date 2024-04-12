FROM node:latest

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app

RUN npm run build

ARG TOKEN
ENV TOKEN=$TOKEN

EXPOSE 7070 

CMD ["npm", "start"]