FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build
RUN yarn install --production

FROM node:lts-alpine

WORKDIR /app

COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY people/ ./people/

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]