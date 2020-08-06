FROM node:alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY . .

RUN npm install

EXPOSE 3001

CMD ["node", "index.js"]