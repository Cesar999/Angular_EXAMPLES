FROM node:10.8.0 as node
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8085 4200
FROM nginx:alpine
COPY --from=node /app/dist/ex2-databinding /usr/share/nginx/html

