FROM node:lts-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn && yarn build

FROM alpine
RUN apk update \
    && apk add nodejs yarn \
    && rm -rf /var/cache/apk/* \
    && mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=0 /usr/src/app/build ./build
RUN yarn global add serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]