FROM node:14-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . .
CMD [ "npm", "start" ]