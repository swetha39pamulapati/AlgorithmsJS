class Graph {

    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++)
            this.adj[i] = [];
    }

    AddEdge(n, e) {

        this.adj[n].push(e);
    }
    BFS(s){
        const visited =[];
        let queue = new Array();
        visited[s] = true;
        queue.push(s);
        while(queue.length) {
            let v = queue.shift();
            console.log(v + " ");
            for(let i of this.adj[v].values()){
                if(!visited[i]){
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    }

}

const g = new Graph(7);

g.AddEdge(0, 1);
g.AddEdge(0, 3);
g.AddEdge(1, 2);
g.AddEdge(3, 2);
g.AddEdge(2, 4);
g.AddEdge(2, 5);
g.AddEdge(3, 4);
g.AddEdge(4, 6);
g.AddEdge(5, 1);
g.AddEdge(6, 1);



console.log("Following is Breadth First " +"Traversal(starting from " + "vertex 2)\n");
g.BFS(0);