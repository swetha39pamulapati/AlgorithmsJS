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

    topSort(){
        let indegree = new Array(this.vertex);
        for(let i = 0; i < this.vertex; i++)
            indegree[i] = 0;
        for (let i = 0; i < this.vertex; i++) {
            let temp = this.adjList[i];
            for (let node = 0; node < temp.length; node++) {
                indegree[temp[node]]++;
            }
        }
        let q = [];
        for (let i = 0; i < this.vertex; i++) {
            if (indegree[i] == 0)
                q.push(i);
        }
        let cnt = 0;
        let topOrder = [];
        while (q.length!=0)
        {
            let u = q.shift();
            topOrder.push(u);

            for (let node = 0; node < this.adjList[u].length; node++)
            {
                if (--indegree[this.adjList[u][node]] == 0)
                    q.push(this.adjList[u][node]);
            }
            cnt++;
        }
        if (cnt != this.vertex) {
            document.write(
                "There exists a cycle in the graph");
            return;
        }
        for (let i = 0; i < topOrder.length; i++)
        {
            console.log(topOrder[i] + " ");
        }

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