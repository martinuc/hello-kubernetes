
## module 3

Pods are the atomic unit on the Kubernetes platform.

A Pod is a Kubernetes abstraction that represents a group of one or more application containers (such as Docker), and some shared resources for those containers. Those resources include:
- Shared storage, as Volumes （共享儲存空間）
- Networking, as a unique cluster IP address （共享網路設定，cluster internal IP 位址、Port）
- Information about how to run each container, such as the container image version or specific ports to use （共享容器運行的相關設定，image 版本、使用特定端口）

The containers in a Pod share an IP Address and port space, are always co-located and co-scheduled, and run in a shared context on the same Node.

- !! A Pod is a group of one or more application containers (such as Docker) and includes shared storage (volumes), IP address and information about how to run them.

Each Pod is tied to the Node where it is scheduled, and remains there until termination (according to restart policy) or deletion. In case of a Node failure, identical Pods are scheduled on other available Nodes in the cluster.
> 每個 Pod 都與創建他的 Node (worker 工作節點綁定)，並保持在那直到終止（根據重啟策略）、或刪除。如果 Node 發生故障，Cluster (Control Plane) 會在其他可用的 Node 上調度同樣 Pod 替代

A Pod always runs on a Node. A Node is a worker machine in Kubernetes and may be either a virtual or a physical machine, depending on the cluster. Each Node is managed by the control plane. A Node can have multiple pods, and the Kubernetes control plane automatically handles scheduling the pods across the Nodes in the cluster. The control plane's automatic scheduling takes into account the available resources on each Node.
一個 Pod 總是運行在 Node 中，Node (工作節點)是 Cluster 中參與計算的機器，可以是虛擬機或是物理機器(取決於 Cluster 中的設定)
每個工作節點 Node 由 Control Plane （主節點）管理，Node 中可以包含多個 Pod，Control Plane 或自動處理 Node 中的 Pod 調度，自動處理調度考量的是每個 Node 上的可用資源。

- !! Containers should only be scheduled together in a single Pod if they are tightly coupled and need to share resources such as disk.
> 如果他們（容器）緊耦合，並需要共享磁碟 Volume、...等資源，那他們應該被放在同一個 pod 中

**
每個 Node 應運行（process）
Every Kubernetes Node runs at least:

- Kubelet, a process responsible for communication between the Kubernetes control plane and the Node; it manages the Pods and the containers running on a machine.
- A container runtime (like Docker) responsible for pulling the container image from a registry, unpacking the container, and running the application.
**

- !! A node is a worker machine in Kubernetes and may be a VM or physical machine, depending on the cluster. Multiple Pods can run on one Node.




Troubleshooting with kubectl

kubectl get - list resources
kubectl describe - show detailed information about a resource
kubectl logs - print the logs from a container in a pod
kubectl exec - execute a command on a container in a pod

kubectl describe pods

We see here details about the Pod’s container: IP address, the ports used and a list of events related to the lifecycle of the Pod.

Show the app in the terminal
Recall that Pods are running in an isolated, private network - so we need to proxy access to them so we can debug and interact with them. To do this, we'll use the kubectl proxy command to run a proxy in a second terminal. Open a new terminal window, and in that new terminal, run:
> pod 預設運行在 cluster 中的 私有網路，我們需要透過代理將他暴露給外部網路來進行訪問

`kubectl proxy`

Now again, we'll get the Pod name and query that pod directly through the proxy. To get the Pod name and store it in the POD_NAME environment variable:

`export POD_NAME="$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')"`

echo Name of the Pod: $POD_NAME