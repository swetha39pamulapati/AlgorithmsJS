class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    printList() {
        let list = [];
        let currentNode = this.top;
        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(list + " ");

    }

    // Return the top element.
    peek() {
        if(this.top == null)
            console.log("stack is empty");
        else
            console.log("The top element is :" +this.top.value);
    }

    // Insert the element at the top of the stack.
    push(value) {
        const newNode = new Node(value);

        if (this.top === 0) {
            this.top = newNode;
            //this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }



    }

    pop(){
        if(this.top == null)
            console.log("The stack is empty");
        else{
            console.log("The deleted value is" +this.top.value);
            this.top = this.top.next;
        }
    }
}
const myStack = new Stack();

myStack.push(10);                  // Udemy
myStack.push(20);                 // Google --> Udemy
myStack.push(30);
myStack.push(40);
 myStack.printList();
myStack.peek();
myStack.pop();
myStack.pop();
myStack.peek();