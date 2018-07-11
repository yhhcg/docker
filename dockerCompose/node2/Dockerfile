FROM node:carbon

MAINTAINER yhhcg

COPY dist/ /app

WORKDIR /app

EXPOSE 3002

RUN yarn

CMD ["yarn","start"]
