
## Deployment

- K8S 中的 Pod 是由一個以上的容器所組成，為了管理？網路？目的而綑綁再一起。
- Deployment 是官方建議用來運行 Pod 的方式，他會監控 Pod 是否健康、並且在 Pod 掛掉時自動重啟容器。
- `kubectl create deployment hello-node --image=registry.k8s.io/e2e-test-images/agnhost:2.39 -- /agnhost netexec --http-port=8080`
- `kubectl get deployments`
- `kubectl get pods`
- view cluster events : `kubectl get events`
- view cluster configuration: `kubectl config view`
- more kubectl command : https://kubernetes.io/docs/reference/kubectl/