FROM node:carbon

MAINTAINER yhhcg

COPY dist/ /app

WORKDIR /app

EXPOSE 3001

RUN yarn

CMD ["yarn","start"]
