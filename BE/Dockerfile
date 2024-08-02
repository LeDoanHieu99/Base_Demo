FROM node:18.16.0
WORKDIR /home/demo/app
COPY package.json ./
RUN npm install pm2@latest -g && npm install
COPY . ./
CMD ["pm2", "start", "ecosystem.config.js", "--no-daemon"]
EXPOSE 3005
