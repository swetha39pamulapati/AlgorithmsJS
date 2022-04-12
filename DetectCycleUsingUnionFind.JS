class Edge {
    constructor()
    {
        this.src = 0;
        this.dest = 0;
    }
}
class subset
{
    constructor()
    {
        this.parent = 0;
        this.rank = 0;
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

Union(subsets, x,y)
{
    let xroot = this.find(subsets, x);
    let yroot = this.find(subsets, y);

    if (subsets[xroot].rank < subsets[yroot].rank)
        subsets[xroot].parent = yroot;
    else if (subsets[yroot].rank < subsets[xroot].rank)
        subsets[yroot].parent = xroot;
    else {
        subsets[xroot].parent = yroot;
        subsets[yroot].rank++;
    }
}
find(subsets,i)
{
    if (subsets[i].parent != i)
        subsets[i].parent = this.find(subsets, subsets[i].parent);
    return subsets[i].parent;
}

isCycle(graph)
{
    let V = graph.V;
    let E = graph.E;

    let subsets = new subset(V);
    for (let v = 0; v < V; v++)
    {
        subsets[v] = new subset();
        subsets[v].parent = v;
        subsets[v].rank = 0;
    }

    for (let e = 0; e < E; e++)
    {
        let x = this.find(subsets, graph.edge[e].src);
        let y = this.find(subsets, graph.edge[e].dest);
        if (x == y)
            return 1;
        this.Union(subsets, x, y);
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