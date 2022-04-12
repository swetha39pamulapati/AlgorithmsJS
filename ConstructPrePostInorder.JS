class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
let preIndex = 0;
function traverse(pre, post,start,end,size) {
    if (start > end)
        return null;
    let newNode = new Node(pre[preIndex++]);
    if (start == end)
        return newNode;
    let i;
    for(i = start; i <= end; i++)
    {
        if(post[i]== pre[preIndex])
            break;
    }
    newNode.left = traverse(pre, post, start, i, size);
    newNode.right = traverse(pre, post, i + 1, end - 1, size);
    return newNode;
}
function preOrderTraversal(root) {
    if (root != null) {
        console.log(root.val);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
}
let postOrder = [ 8, 9, 4, 5, 2, 6, 7, 3, 1 ];
let preOrder = [1, 2, 4, 8, 9, 5, 3, 6, 7 ];
let size = preOrder.length;
let root = traverse(preOrder, postOrder, 0, size - 1, size);
preOrderTraversal(root);