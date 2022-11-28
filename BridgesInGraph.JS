class Graph {

    constructor(x) {

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
        for(let v of this.adjList[u].values()){
            if (v == parent)
                continue;
            if(!visited[v]){

                this.bridgeUtil(v,visited,low,disc,u);
                this.low[u] = Math.min(low[u],low[v]);
                if(low[v]>disc[u])
                    console.log(u +" "+ v);
            }
            else {
                low[u] = Math.min(low[u],disc[v]);
            }
        }
}
    bridge(){
        for(let i =0; i<this.vertex; i++){
            this.visited[i] = 0
        }
        for(let j = 0; j<this.vertex; j++){
            if(!this.visited[j]){
                this.bridgeUtil(j,this.visited,this.low,this.disc,-1);
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