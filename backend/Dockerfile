FROM node:14

WORKDIR /portfolioSite/backend

COPY package*.json ./

RUN npm install

RUN npm install pm2@latest -g

RUN npm audit fix

COPY . .

EXPOSE 4000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]