FROM node:22

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

