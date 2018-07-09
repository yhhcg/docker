FROM nginx:latest

MAINTAINER yhhcg

COPY dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 81

CMD ["nginx","-g","daemon off;"]
