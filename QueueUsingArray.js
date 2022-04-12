class queue{
    constructor(){
        this.data= [];
        this.Max = 6;
        this.front = -1;
        this.rear = -1;
        this.data = new Array(this.Max);
    }
    enQueue(x){
        if (this.rear == (this.Max - 1))
        {
            console.log("Queue size limit reached.");
        }
        else if(this.front==-1 && this.rear == -1)
        {
            this.front = this.rear = 0;
            this.data[this.rear] = x;
            console.log(x + " is added into the queue.");
        }
        else
        {
            this.data[++this.rear] = x;
            console.log(x + " is added into the queue.");
        }

    }
    peek(){
        if (this.rear == this.front)
        {
            console.log("Queue is empty.");
        }
        else
        {
            return this.data[this.front];
        }
    }
    deQueue(){
        if (this.rear == -1 && this.front == -1)
        {
            console.log("Queue is empty.");
        }
        else if(this.rear == this.front)
        {
            this.front = this.rear = -1;

        }
        else
        {
            let x = this.data[this.front];
            console.log(x + " is deleted from the queue.");
            this.front++;
        }
    }
    isEmpty(){
        if (this.rear == -1 && this.front == -1)
        {
            console.log("Queue is empty.");
        }
        else
        {
            console.log("Queue is not empty.");
        }

    }
    size()
    {
        return (this.rear - this.front)+1;
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
myQueue.enQueue(50);
myQueue.enQueue(60);
myQueue.enQueue(70);
myQueue.printList();
myQueue.deQueue();
console.log(myQueue.peek());
