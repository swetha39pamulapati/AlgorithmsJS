class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
class createBT {
    constructor(root = null) {
        this.root = root;
    }
    Add(data){
        let node = new Node(data);
        if(this.root == null)
            this.root = node;
        else{
            let parent = this.root;
            while(parent != null) {
                if(data<parent.val) {
                    if (parent.left == null) {
                        parent.left = node;
                        return;
                    }
                else
                    {
                        parent = parent.left;
                    }
                }
            else if(data>parent.val){
                    if(parent.right == null){
                        parent.right = node;
                        return;
                    }
                    else{
                        parent = parent.right
                    }
                        }
            else{
                return;
                }
            }

        }

    }
    preOrderTraversal(root) {
        if (root != null) {
            console.log(root.val);
            this.preOrderTraversal(root.left);
            this.preOrderTraversal(root.right);
        }
    }

    inOrderTraversal(root) {
        if (root != null) {
            this.inOrderTraversal(root.left);
            console.log(root.val);
            this.inOrderTraversal(root.right);
        }
    }
    postOrderTraversal(root) {
        if (root != null) {
            this.postOrderTraversal(root.left);
            this.postOrderTraversal(root.right);
            console.log(root.val);
        }
    }
    GetTreeDepth(parent)
{
    if (parent == null)
    return 0;
    else
{
    let leftChildDepth = this.GetTreeDepth(parent.left);
    let rightChildDepth = this.GetTreeDepth(parent.right);
    if(leftChildDepth > rightChildDepth)
    return leftChildDepth + 1;
    else
    return rightChildDepth + 1;
}
}
    search( parent, value)
{
    while(parent!= null)
{
    if (value == parent.val)
    return true;
    else if (value < parent.val)
    return this.search(parent.left, value);
    else
    return this.search(parent.right, value);
}
return false;
}
    findMax( node)
{
    while (node.left != null)
{
    node = node.left;
}
return node.val;
}
    remove( parent,  key)
{
    if (parent == null) return parent;

    if (key < parent.val)
    parent.left = this.remove(parent.left, key);
    else if (key > parent.val)
    parent.right = this.remove(parent.right, key);

    // if value is same as parent's value, then this is the TreeNode to be deleted
    else
{
    // TreeNode with only one child or no child
    if (parent.left == null)
    return parent.right;
    else if (parent.right == null)
    return parent.left;

    // TreeNode with two children: Get the inorder successor (smallest in the rightChild subtree)
    parent.val = this.findMax(parent.right);

    // Delete the inorder successor
    parent.right = this.remove(parent.right, parent.val);
}

return parent;
}
}
const binaryTree = new createBT();
binaryTree.Add(12);
binaryTree.Add(11);
binaryTree.Add(14);
binaryTree.Add(20);
binaryTree.Add(15);
binaryTree.Add(6);
binaryTree.Add(8);
binaryTree.Add(17);
binaryTree.Add(5);
console.log("PreOrder Traversal:");
binaryTree.preOrderTraversal(binaryTree.root);
console.log("InOrder Traversal:");
binaryTree.inOrderTraversal(binaryTree.root);
console.log("PostOrder Traversal:");
binaryTree.postOrderTraversal(binaryTree.root);
console.log("Tree height is :");
console.log(binaryTree.GetTreeDepth(binaryTree.root));
console.log("The value is present :");
console.log(binaryTree.search(binaryTree.root,17));
console.log("The list after deletion :");
console.log(binaryTree.remove(binaryTree.root, 12));
console.log("InOrder Traversal:");
binaryTree.inOrderTraversal(binaryTree.root);