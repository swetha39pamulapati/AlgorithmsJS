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
    enQueue(value){
        const newNode = new Node(value);
        if(this.rear == null && this.front == null)
            this.front= this.rear = newNode;
        else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    deQueue(){
        if(this.rear == null && this.front == null){
            console.log("queue is empty");
        }
        const temp = this.front;
        this.front = this.front.next;
        console.log("the deleted item is " +temp.data);
        this.temp = null;
    }


    peek(){
        if(this.rear == null && this.front == null){
            console.log("queue is empty");
        }
        else
            console.log("The top data is " +this.front.data);
    }

}
const myQueue = new queueLinkedList();
myQueue.enQueue(10);
myQueue.enQueue(20);
myQueue.enQueue(30);
myQueue.enQueue(40);
//myQueue.printList();
//myQueue.peek();
myQueue.peek();
myQueue.deQueue();
myQueue.peek();
//myQueue.printList();