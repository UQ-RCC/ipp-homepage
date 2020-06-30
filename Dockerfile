FROM alpine
WORKDIR /app

EXPOSE 80

FROM nginx
COPY . /usr/share/nginx/html/
