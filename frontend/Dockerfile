FROM --platform=linux/arm64 node:24-bookworm

WORKDIR /app/frontend

COPY package*.json ./

RUN rm -rf node_modules package-lock.json
RUN npm install
RUN npm install --save-dev @next/swc-linux-arm64-gnu

RUN npm install
COPY . /app/frontend
