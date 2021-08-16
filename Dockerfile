FROM node:lts-alpine AS build

WORKDIR /build

COPY . .

RUN yarn install

RUN yarn build
RUN yarn install --production

FROM node:lts-alpine

WORKDIR /app

COPY --from=build /build/public ./public
COPY --from=build /build/dist ./dist
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/views ./views
COPY people/ ./people/

EXPOSE 7574

CMD node dist/app.js