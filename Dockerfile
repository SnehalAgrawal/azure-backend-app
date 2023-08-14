FROM node:19.1-alpine3.15
WORKDIR /app
COPY ./dist .
COPY package.json .
RUN ls /app
RUN npm install
RUN npm add reflect-metadata tslib rxjs @nestjs/platform-express pino-pretty
CMD node ./main.js
