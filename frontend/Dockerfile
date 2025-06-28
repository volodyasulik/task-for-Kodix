FROM node:20-bullseye AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN GENERATE_SOURCEMAP=false DISABLE_ESLINT_PLUGIN=true yarn build

# ----- Production Image -----
FROM node:20-bullseye AS production

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build  

CMD ["yarn", "start"]
