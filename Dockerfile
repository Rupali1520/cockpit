# Use a newer version of Node.js
FROM node:18-alpine

# Set the working directory
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ARG BACKEND_SERVICE_NAME

ENV BACKEND_SERVICE_NAME=$BACKEND_SERVICE_NAME

# Install dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Expose the port
EXPOSE 4200

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
