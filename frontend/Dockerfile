# Stage 1: Build the Vite app
FROM node:16-alpine as builder
WORKDIR /docker
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /docker
COPY --from=builder /docker/dist ./dist
RUN npm install -g serve
EXPOSE 3000
CMD ["npm", "run", "dev"]
