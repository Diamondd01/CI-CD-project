FROM node:14
ENV NODE_ENV=development
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
COPY . .
EXPOSE 80
CMD [ "node", "server.js" ]