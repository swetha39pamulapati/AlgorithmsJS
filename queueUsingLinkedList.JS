class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}
class queueLinkedList{
    constructor(){
       this.front =this.rear= null;
    }
    printList(){
        const temp = this.front;
        if(this.rear == null && this.front == null){
            console.log("queue is empty");
        }
        while(temp!= null){
            console.log(this.temp.data);
            this.temp = this.temp.next;
        }
    }
    enQueue(value){
        const newNode = new Node(value);
        if(this.rear == null)
            this.front= this.rear = newNode;
        else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    peek(){
        if(this.rear == null && this.front == null){
            console.log("queue is empty");
        }
        else
            console.log("The top data is " +this.front.data);
    }
    deQueue(){
        if(this.rear == null && this.front == null){
            console.log("queue is empty");
        }
        const temp = this.front;
        this.front = this.front.next;
        if(this.front == null)
            this.rear = null;
        console.log("the deleted item is " +temp.data);
    }
}
const myQueue = new queueLinkedList();
myQueue.enQueue(10);
myQueue.enQueue(20);
myQueue.enQueue(30);
myQueue.enQueue(40);
myQueue.peek();
//myQueue.deQueue();
myQueue.printList();