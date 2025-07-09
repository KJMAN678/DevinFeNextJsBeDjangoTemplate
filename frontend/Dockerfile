FROM node:24-alpine

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

COPY . /app/frontend
