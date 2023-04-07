## 介紹

Docker、K8S 練習用 Server

## 指令

- `docker build . -t <your username>/node-server`: 建置 Image 
- `docker images`: 查看 Image 清單
- `docker rmi <image-name>`: 刪除指定 Image
- `docker run -p 3030:8080 -d <your username>/node-server`: 運行容器
- `docker ps`: 查看容器運行清單
- `docker logs <container id>`: 查看容器運行狀態
- `curl -i localhost:3030`: 發送請求至容器內的伺服器
- `docker kill <container id>`: 刪除指定容器
- `docker stop <container id>`: 停止容器運行
- `docker exec -it <container id> /bin/bash`: 進入容器
- `docker system prune`: 釋放資源
- `docker login -u=<username>`: 登入你的 Docker Hub
- `dk push <your username>/node-server:latest`: 分享你的 Image 至 Docker Hub

