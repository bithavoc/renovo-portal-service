FROM node:14
ADD . .
RUN npm install --production
CMD npm run start
