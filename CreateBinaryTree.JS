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

    createBinaryTree(arr, i, rax) {
        if (i < arr.length) {
            let temp = new Node(arr[i]);
            rax = temp;
            rax.left = this.createBinaryTree(arr, 2 * i + 1, rax.left);
            rax.right = this.createBinaryTree(arr, 2 * i + 2, rax.right);
        }
        return rax;
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
}
let arr = [7,6,5,4,3,2,1];
const p = new createBT();
p.root = p.createBinaryTree(arr,0,p.root);
console.log("\n inorder: ");
p.inOrderTraversal(p.root);
console.log("\n Preorder: ");
p.preOrderTraversal(p.root);
console.log("\n Postorder: ");
p.postOrderTraversal(p.root);
