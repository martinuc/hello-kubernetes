
## Dashboard

- minikube dashboard 是一個 add-on 外掛，將運行一個代理於你電腦預設瀏覽器中，你可以透過 dashboard 來創建 k8s 資源像是 deployment, service
- 在預設情況下 dashboard 只能被 k8s 內部虛擬網路所訪問（internal k8s virtual network），而 minikube dashboard 指令將創建一個臨時的代理來讓外部網路可以進入 k8s 內部虛擬網路訪問。 
- 如果要停止代理，只需要按下 ctrl+c 停止進程即可(dashboard 仍在 cluster 中運行，只是代理終止)