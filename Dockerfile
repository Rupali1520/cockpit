# Stage 1: Build Angular application
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ng build --prod

# Stage 2: Create the final image
FROM nginx:1.21
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
