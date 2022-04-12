class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}

function traverse(post,postIdx, inOrdr,start,end)
{
    if (start > end || postIdx<0)
        return null;
    let tNode = new Node(post[postIdx]);
    if (start == end)
        return tNode;
    let i;
    for( i = start;i<end; i++) {
        if (inOrdr[i] == tNode.val)
            break;
    }
    tNode.left = traverse(post, postIdx - 1 - (end - i), inOrdr, start, i - 1);
    tNode.right = traverse(post, postIdx-1, inOrdr, i+1, end);
    return tNode;
}
function postOrderTraversal(root) {
    if (root != null) {
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        console.log(root.val);
    }
}
let postOrder = [9, 1, 2, 12, 7, 5, 3, 11, 4, 8 ];
let inOrder = [9, 5, 1, 7, 2, 12, 8, 4, 3, 11 ];
let root = traverse(postOrder, postOrder.length-1, inOrder,0, postOrder.length-1);
postOrderTraversal(root);
