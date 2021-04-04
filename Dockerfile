FROM node:alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn build
EXPOSE 3000
CMD yarn start