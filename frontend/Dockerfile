# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /docker

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Use a minimal Node.js runtime for the production build
FROM node:16-alpine as production
WORKDIR /docker
COPY --from=0 /app/dist ./dist

# Install a lightweight web server
RUN npm install -g serve

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "dist"]

