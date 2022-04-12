class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}
class queueLinkedList {
    constructor() {
        this.front = this.rear = null;
    }
    enQueue(x)
{
    let newNode = new Node(x);
    if(this.rear == null)
{
    this.front = this.rear = newNode;
    this.rear.next = this.front;
}
else
{
    this.rear.next = newNode;
    this.rear = newNode;
    this.rear.next = this.front;
}
}
    dequeue()
    {
        let temp = this.front;
        if (this.front == null && this.rear == null)
            console.log("Queue is empty");
        else if (this.front == this.rear)
        {
            this.front = this.rear = null;
            console.log("the deleted item is " +temp.data);
            this.temp = null;
        }
        else
        {
            this.front = this.front.next;
            this.rear.next = this.front;
            console.log("the deleted item is " +temp.data);
            this.temp = null;
        }
    }
    peek()
    {
        if (this.front == null && this.rear == null)
            console.log("Queue is empty");
        else
        {
            console.log("The top value is " +this.front.data);
        }
    }
}
const myQueue = new queueLinkedList();
myQueue.enQueue(10);
myQueue.enQueue(20);
myQueue.enQueue(30);
myQueue.enQueue(40);
//myQueue.printList();
myQueue.peek();
myQueue.deQueue();
myQueue.peek();
//myQueue.printList();