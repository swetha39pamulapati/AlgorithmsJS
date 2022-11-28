
class Edge {
    constructor()
    {
        this.src = 0;
        this.dest = 0;
        this.weight = 0;
    }
}
class Graph {
    constructor(nV, nE) {
        this.V = nV;
        this.E = nE;
        this.edge = new Array(this.E);
        for (let i = 0; i < this.E; i++) {
            this.edge[i] = [];
        }
    }
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
     KruskalMST()
    {

        let result = new Edge(V);
        let e = 0;
        let i = 0;
        for (i = 0; i < V; ++i)
            result[i] = new Edge();

        this.edge.sort(function(a, b) {
            return a.weight - b.weight;
        });

        let parent = new Array(V);
        for (let v = 0; v < V; v++)
        {
            parent[v] = v;
        }


        i = 0;
        while (e < V - 1)
        {
            let next_edge = new Edge();
            next_edge = this.edge[i++];
            let x = this.find(parent, next_edge.src);
            let y = this.find(parent, next_edge.dest);
            if (x != y)
            {
                result[e++] = next_edge;
                this.Union(parent, x, y);
            }
        }
        console.log("Following are the edges in " + "the constructed MST");

        let minimumCost = 0;
        for (i = 0; i < e; ++i)
        {
            console.log(result[i].src + " -- " + result[i].dest + " == " + result[i].weight);
            minimumCost += result[i].weight;
        }

        console.log("Minimum Cost Spanning Tree" + minimumCost);
    }

}
let V = 4, E = 5;
const graph = new Graph(V, E);
// add edge 0-1
graph.edge[0].src = 0;
graph.edge[0].dest = 1;
graph.edge[0].weight = 10;

// add edge 0-2
graph.edge[1].src = 0;
graph.edge[1].dest = 2;
graph.edge[1].weight = 6;

// add edge 0-3
graph.edge[2].src = 0;
graph.edge[2].dest = 3;
graph.edge[2].weight = 5;

// add edge 1-3
graph.edge[3].src = 1;
graph.edge[3].dest = 3;
graph.edge[3].weight = 15;

// add edge 2-3
graph.edge[4].src = 2;
graph.edge[4].dest = 3;
graph.edge[4].weight = 4;

// Function call
graph.KruskalMST();