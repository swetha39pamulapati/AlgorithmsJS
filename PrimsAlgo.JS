const  V = 5;
function minKey(key,mstSet)
{
    let min = Number.MAX_SAFE_INTEGER, min_index = -1;

    for (let v = 0; v < V; v++)
    if (mstSet[v] == false && key[v] < min)
    {
        min = key[v];
        min_index = v;
    }

    return min_index;
}
function primMST(graph)
{
    let parent = new Array(V).fill(0);
    let key = new Array(V).fill(Number.MAX_SAFE_INTEGER);
    let mstSet = new Array(V).fill(false);
    key[0] = 0;
    parent[0] = -1;
    for (let count = 0; count < V - 1; count++)
    {
        let u = minKey(key, mstSet);
        mstSet[u] = true;
        for (let v = 0;v < V;v++)
        {
let data = graph[u];
let keyValue = key[v];
        if (data[v] != 0 && mstSet[v] == false && data[v] < keyValue) {
            parent[v] = u;
            key[v] = data[v];
        }
    }
    }
    printMST(parent, graph);
}

function printMST(parent, graph)
{
    console.log("Edge \tWeight");
    let minCost = 0;
    for (let i = 1; i < V; i++)
    {
        let par = graph[parent[i]]
        console.log(parent[i] + " - " + i + "\t" + par[i]);
        minCost += par[i];
    }
    console.log("The minimum spanning tree is" + minCost);
}
let graph = [ [0, 2, 0, 6, 0 ],
    [2, 0, 3, 8, 5 ],
    [0, 3, 0, 0, 7 ],
    [6, 8, 0, 0, 9 ],
    [ 0, 5, 7, 9, 0 ] ];
primMST(graph);