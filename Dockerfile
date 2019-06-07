FROM node:latest

WORKDIR /app

#COPY package.json /usr/app
#COPY package-lock.json /usr/app
RUN npm install

#COPY . /usr/app

ENTRYPOINT npm run dev
