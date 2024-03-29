class Edge {
    constructor()
    {
        this.src = 0;
        this.dest = 0;
    }
}
class Graph{
    constructor(nV,nE){
        this.V = nV;
        this.E = nE;
        this.edge = new Array(this.E);
        for (let i = 0; i < this.E; i++)
        {
            this.edge[i] = [];
        }
    }


// class to represent Subset

Union(parent, x,y)
{
    parent[x] = y;
    }

find(parent,i)
{
    if (parent[i] == i)
        return i;
    return this.find(parent, parent[i]);
}

isCycle(graph)
{
    let V = graph.V;
    let E = graph.E;

    let parent = new Array(V);
    for (let v = 0; v < V; v++)
    {
        parent[v] = v;
    }

    for (let e = 0; e < E; e++)
    {
        let x = this.find(parent, graph.edge[e].src);
        let y = this.find(parent, graph.edge[e].dest);
        if (x == y)
            return 1;
        this.Union(parent, x, y);
    }
    return 0;
}
}
let V = 3, E = 3;
const graph = new Graph(V, E);
graph.edge[0].src = 0;
graph.edge[0].dest = 1;

graph.edge[1].src = 1;
graph.edge[1].dest = 2;

graph.edge[2].src = 0;
graph.edge[2].dest = 2;
if (graph.isCycle(graph) == 1)
    console.log("Graph contains cycle");
else
    console.log("Graph doesn't contain cycle");