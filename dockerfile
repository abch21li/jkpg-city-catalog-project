FROM node:20-alpine

WORKDIR /user/src/app

Copy . . 

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]