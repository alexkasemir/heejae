FROM node:latest

WORKDIR /srv/site

ADD package.json /srv/site/package.json
RUN npm install --silent

ADD . /srv/site
RUN npm run build

EXPOSE 80

CMD npm run prod
