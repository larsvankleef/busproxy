FROM node:12.16.1-alpine

WORKDIR /app
ADD . /app/

RUN yarn

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD [ "yarn", "start" ]
