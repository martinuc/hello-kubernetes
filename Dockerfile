FROM node:16

WORKDIR /Users/home/dev/kube-server

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "bin/www"]