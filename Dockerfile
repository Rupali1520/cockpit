# Stage 1: Build the Angular application
FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli

RUN ng build

# Stage 2: Serve the application from Nginx
FROM nginx:1.21-alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
