FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]