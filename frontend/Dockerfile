FROM node:14

WORKDIR /portfolioSite/frontend

COPY package*.json ./

RUN npm install

RUN npm install pm2@latest -g

RUN npm audit fix

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]