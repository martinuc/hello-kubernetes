FROM node:16

WORKDIR /Users/home/dev/kube-server

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 8080

CMD ["node", "bin/www"]