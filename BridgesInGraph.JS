class Graph {

    constructor(x) {
        this.parent =new Array(this.vertex);
        this.visited =new Array(this.vertex);
        this.disc = new Array(this.vertex);
        this.low =new Array(this.vertex);
        this.time =0;
        this.vertex = x;
        this.adjList = new Array(x);
        for (let i = 0; i < x; i++)
            this.adjList[i] = [];
    }

    addEdge(n, e) {
        this.adjList[n].push(e);
        this.adjList[e].push(n);
    }
    bridgeUtil(u,visited,low,disc,parent){
        visited[u] = true;
        this.disc[u] = this.low[u] = ++this.time;
        for(let i of this.adjList[u].values()){
            let v =i;
            if(!visited[v]){
                parent[v] = u;
                this.bridgeUtil(v,visited,low,disc,parent);
                this.low[u] = Math.min(low[u],low[v]);
                if(low[v]>disc[u])
                    console.log(u +" "+ v);
            }
            else if(v!= parent[u]){
                low[u] = Math.min(low[u],disc[v]);
            }
        }
}
    bridge(){
        for(let i =0; i<this.vertex; i++){
            this.parent[i] = -1;
            this.visited[i] = 0
        }
        for(let j = 0; j<this.vertex; j++){
            if(!this.visited[j]){
                this.bridgeUtil(j,this.visited,this.low,this.disc,this.parent);
            }
        }

    }
}

console.log("Bridges in the graph ");
const g3 = new Graph(6);
g3.addEdge(0, 1);
g3.addEdge(1, 2);
g3.addEdge(2, 3);
g3.addEdge(3, 4);
g3.addEdge(5, 3);
g3.addEdge(5, 1);

g3.bridge();