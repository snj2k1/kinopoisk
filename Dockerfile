FROM node:latest

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app

RUN npm run build

ARG TOKEN_KEY
ENV TOKEN_KEY=$TOKEN_KEY

EXPOSE 7070 

CMD ["npm", "start"]