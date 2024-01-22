FROM node:18 as build
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn dotenv -e .env.production -- yarn prisma generate
RUN yarn build

FROM node:18-slim
RUN apt update && apt install libssl-dev dumb-init -y --no-install-recommends
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/.env.production .env.production
COPY --chown=node:node --from=build /usr/src/app/package.json .
COPY --chown=node:node --from=build /usr/src/app/yarn.lock .
RUN yarn install --production
COPY --chown=node:node --from=build /usr/src/app/node_modules/.prisma/client  ./node_modules/.prisma/client
ENV NODE_ENV production
EXPOSE 8000
CMD ["yarn", "run", "start:prod"]