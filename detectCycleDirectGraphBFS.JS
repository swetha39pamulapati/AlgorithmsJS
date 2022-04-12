class Graph {
    constructor(x) {
        this.vertex = x;
        this.adjList = new Array(x);
        for (let i = 0; i < x; i++)
            this.adjList[i] = [];
    }

    addEgde(n, e) {
        this.adjList[n].push(e);
    }
    BFS(s)
    {

    let visited = new Array(this.vertex).fill(false);
    let queue = new Queue();
    visited[s] = true;
    queue.enqueue(s);

    while (queue.size() != 0)
    {
    s = queue.moveFirst();
    queue.dequeue();
    let list = this.adjList[s];
list.forEach((val)=>
{
    if (!visited[val])
{
    visited[val] = true;
    queue.enqueue(val);
}
else
{
    return true;
}
});
}
return false;
}

}
const graph = new Graph(4);

graph.addEgde(0, 1);
graph.addEgde(1, 2);
graph.addEgde(2, 0);
graph.addEgde(2, 3);
console.log(graph.BFS(0));