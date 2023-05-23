---
title: K8S
tags:
---


## Create a Cluster

- **Kubernetes is a production-grade, open-source platform that orchestrates the placement (scheduling) and execution of application containers within and across computer clusters.**

- **Control Planes manage the cluster and the nodes that are used to host the running applications.**
    - Control Planes 用來管理 Cluster 中的 Nodes，而 Node 用來運行我們的 App 應用。

- 圖 ![module_01_cluster.svg](K8S/module_01_cluster.svg)

- Control Planes 也運行在 Node 上，通常我們又稱之為 Master Node，所以一個 Cluster 通常最少會有 3 個 Node，一個 Control Planes、一個 App、一個備用 App

- The Control Plane coordinates the cluster -> master node
- Nodes are the workers that run applications -> worker node
    > Control Plane 即是 Master Node、Nodes 則是 Worker Node

- The Control Plane is responsible for managing the cluster. The Control Plane coordinates all activities in your cluster, such as scheduling applications, maintaining applications' desired state, scaling applications, and rolling out new updates.
    > 當我們要對 Cluster 中的應用進行調度、維護、擴容、更新，都要透過 Control Plane

- A node is a VM or a physical computer that serves as a worker machine in a Kubernetes cluster. Each node has a Kubelet, which is an agent for managing the node and communicating with the Kubernetes control plane. The node should also have tools for handling container operations, such as containerd or Docker. A Kubernetes cluster that handles production traffic should have a minimum of three nodes because if one node goes down, both an etcd member and a control plane instance are lost, and redundancy is compromised. You can mitigate this risk by adding more control plane nodes.
    > Node 可以是一個 虛擬機 VM 或 物理機，在 Cluster 中 Node 扮演工作機器的角色。每個 Node 都包含一個 kubelet，kubelet 是 Node 與 Contorl Plane 間進行通信的代理，此外 Node 也應該包含處理容器操作的工具，一般來說會是 Docker 或是 rkt。（Node 使用 Control Plane 暴露的 kubernetes api 與其交互）

- When you deploy applications on Kubernetes, you tell the control plane to start the application containers. The control plane schedules the containers to run on the cluster's nodes. The nodes communicate with the control plane using the **Kubernetes API**, which the control plane exposes. End users can also use the Kubernetes API directly to interact with the cluster.
    > 當我們部署應用在 Kubernetes 上的時候，其實就是告訴 Control Plane 來幫我們進行容器的部署。而不管是終端和 Control Plane 間，抑或 Control Plane 和 Node 間，都是透過 Kubernetes API 來進行通信。


- A Kubernetes cluster can be deployed on either physical or virtual machines. To get started with Kubernetes development, you can use Minikube. Minikube is a lightweight Kubernetes implementation that creates a VM on your local machine and deploys a simple cluster containing only one node. Minikube is available for Linux, macOS, and Windows systems. 
    > Kubernetes 可以部署在物理機上，也可以部署在虛擬機上，這樣的特性和 Node 是相同的。在此介紹 Minikube 是一種輕量版的 Kubernetes 實現，可以運行於 Linux, macOS, Window

## Flow

- 先帶觀念、解釋術語、角色
- 在用 minikube 實作，並複習前面所說的觀念，喚醒記憶
- 正式環境展示
- 進階學習資源分享

## Volume
for only pod, temp
- ConfigMap
- Secret

for share, persist
- PV
- PVC

- 帶大家透過 minikube 了解 k8s 入門觀念
- cluster, node, pod, deployment, service, dashboard, api server, kubelet, volume, config, pvc, scale, limit, security, staeless, stateful app
- 並實作正式環境運行伺服器（只展示不深入）


- Create a minikube cluster

- `minikube start`
- `minikube dashboard`


## 小試身手














基礎
* K8S 歷史由來介紹
* Create Cluster 創建叢集
* Deploy an App 部署應用
* Explore your App 探索應用？
* Expose your App Publicly 上架應用？
* Scale your App 規模適應應用？
* Update your App 更新應用

重要
* 繪製角色關係圖
* Cluster
* Workerload?
* Node
* Pod
* Control Panel
* API Server
* etcd
* Service
* Deployment
* Replica 
* Dashboard
* minikube 
* kubectl 

App 應用
* Node.js
* ab 壓測工具
* MySQL 
* Docker
* AWS
* HTML 打卡介面
* 打卡即可獲得本次上課教學教材

設定
* 



