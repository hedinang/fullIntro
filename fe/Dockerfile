# FROM node:16
# WORKDIR /fe
# COPY . .
# RUN npm install
# CMD npm start

# Build
FROM node:lts AS build
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build
# 2. For Nginx setup
FROM nginx:alpine
# Copy config nginx
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/build .
# Containers run nginx with global directives and daemon off
EXPOSE 4400
ENTRYPOINT ["nginx", "-g", "daemon off;"]