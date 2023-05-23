
## Service
- 在預設情況下 Pod 只能被 K8S Cluster 的內部網路所訪問。(only accessible by its internal IP address within the kubernetes cluster)

- 如果要讓外部網路可以訪問 Pod，我們必須透過 service 將 pod 暴露出去（expose the pod as a kubernetes service）

- `kubectl expose deployment hello-node --type=LoadBalancer --port=8080`

- `kubectl get services`

- `minikube service hello-node`