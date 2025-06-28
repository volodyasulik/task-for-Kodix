
FROM node:18-bullseye AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN npx prisma generate


FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production=false --network-timeout 100000 --no-cache

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules

RUN yarn add bcrypt

COPY --from=builder /app/.env .env

CMD ["node", "dist/main"]