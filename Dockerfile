FROM node:12

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

#test

EXPOSE 80 8002

RUN npm run build

CMD [ "npm", "start" ]
