FROM node:10.15.0-alpine

RUN apk update && apk add openssh=8.3_p1-r0 vim=8.2.1419-r0 bash=5.0.18-r0 --no-cache

WORKDIR /tmp

COPY package.json /tmp/

RUN npm install

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN cp -a /tmp/node_modules /usr/src/app/

EXPOSE 80

CMD ["bash","docker_start_script.sh"]