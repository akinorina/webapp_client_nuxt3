FROM node:18-slim

# environment variables
ENV TZ Asia/Tokyo
ENV NITRO_PORT 4000

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy over package.json files
COPY package.json .
COPY package-lock.json .

# install all dependencies
RUN npm ci && npm cache clean --force

# copy over all files to the work directory
COPY . .

# .env for local
# COPY ./.env.local ./.env
# .env for production
COPY ./.env.production ./.env

# build the project
# for local
# RUN npm run build_local
# for production
RUN npm run build

# install pm2
RUN npm install pm2 -g

EXPOSE 4000
ENTRYPOINT [ "pm2-runtime", "start", "ecosystem.config.cjs" ]
