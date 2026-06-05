FROM node:18

WORKDIR /home/node/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Fail the image build early if pg is missing (TypeORM needs it at runtime)
RUN node -e "require('pg')"

EXPOSE 8002

CMD ["node", "build/index.js"]
