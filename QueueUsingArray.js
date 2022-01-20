class queue{
    constructor(){
        this.data= [];
        this.front = -1;
        this.rear = -1;
    }
    enQueue(value){
        this.rear++;
            this.data[this.rear] = value;
    }
    peek(){
        if(this.front== this.rear )
            console.log("queue is empty");
        else{
            console.log(this.data[this.front+1]);
        }
    }
    deQueue(){
        if(this.front== this.rear )
            console.log("queue is empty from dequeue");
        else{
            this.front++;
            let x = this.data[this.front];
            console.log(x+"is deleted from queue");
        }
    }
    printList(){
        if(this.front== -1 && this.rear == -1)
            console.log("queue is empty");
        else{
            for(let i =0; i<this.rear+1; i++){
                console.log(this.data[i]);
            }
        }
    }
}
const myQueue = new queue();
myQueue.enQueue(10);
myQueue.enQueue(20);
myQueue.enQueue(30);
myQueue.enQueue(40);
myQueue.printList();
myQueue.deQueue();
myQueue.peek();
