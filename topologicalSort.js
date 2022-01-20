class Graph
{
    constructor(x){
        this.vertex = x;
        this.adjList = new Array(x);
        for(let i =0; i<x; i++)
            this.adjList[i] = [];
    }
    addEdge(n,e)
    {
        this.adjList[n].push(e);

    }
    topSortUtil(v,visited,data){
        visited[v] = true;
        for(let i of this.adjList[v].values())
        {
            let n = i
            if (!visited[n])
                this.topSortUtil(n, visited,data);
        }
        data.push(v);
    }
    topSort(){
        let visited = [];
        let data = new Array(this.vertex);
        for(let i =0; i<this.vertex;i++){
            if(!visited[i]){
                this.topSortUtil(i,visited,data);
            }
        }
        data.forEach(element => console.log(element));
    }
}
const g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);
g.topSort();