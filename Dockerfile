FROM node:16-alpine

WORKDIR /usr/src/app
ADD . .

RUN yarn install

EXPOSE 3030
CMD [ "yarn", "run", "start" ]