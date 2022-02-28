FROM node:14.16-alpine as builder
WORKDIR /app
COPY ./ $WORKDIR
ENV NODE_ENV=production
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]