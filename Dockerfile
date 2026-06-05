FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

RUN node -e "require('pg'); console.log('pg installed:', require('pg/package.json').version)"

EXPOSE 8002

CMD ["node", "build/index.js"]
