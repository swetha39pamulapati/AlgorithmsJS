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
function traverseList(inOrdr, pre,start,end)
{

    if (start > end )
        return null;

    let tnode = new Node(pre[preIndex++]);
    //If node has No children
    if (start == end)
        return tnode;
    let i;

    for (i = start; i < end; i++)
    {
        if (inOrdr[i] == tnode.val)
        {
            break;
        }
    }
    //else find the index of tnode in inorder
    tnode.left = traverseList(inOrdr, pre, start, i - 1);
    tnode.right = traverseList(inOrdr, pre,i+1,end);
    return tnode;
}
function inOrderTraversal(root) {
    if (root != null) {
        inOrderTraversal(root.left);
        console.log(root.val);
        inOrderTraversal(root.right);
    }
}
let preOrder = [1, 2, 4, 8, 9, 10, 11, 5, 3, 6, 7 ];
let inorder = [8, 4, 10, 9, 11, 2, 5, 1, 6, 3, 7 ];
let root =   traverseList(inorder,preOrder, 0, inorder.length - 1);
inOrderTraversal(root);