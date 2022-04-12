class queue {
    constructor() {
        this.queue = [];
        this.Max = 6;
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(this.Max);
    }
    enQueue(data)
{
    if(this.front ==-1&& this.rear== -1)
{
    this.front = this.rear = 0;
    this.queue[this.rear] = data;
}
else if(Math.floor((this.rear+1)%this.Max) == this.front)
{
    console.log("queue is full");
    return;
}
else
{
    this.rear = Math.floor((this.rear + 1) % this.Max); //As the queue has to be circular, we will check this condition instead of incrementing.
    this.queue[this.rear] = data;
}
}
    dequeue()
    {
        if (this.front == -1 && this.rear == -1)
        {
            console.log("The queue is empty");
        }
        else if (this.front == this.rear)
        { //only 1 element in the queue
            this.front = this.rear = -1; //To make queue empty;
        }
        else
        {
            // Console.WriteLine(queue[front]);
            this.front = Math.floor((this.front+1)% this.Max);
        }
    }
    peek()
    {
        if (this.front == -1 && this.rear == -1)
        {
            console.log("The queue is empty");
        }
        else
        {
            console.log("The top value is :"+this.queue[this.front]);
        }
    }
    display()
    {

        if(this.front==-1 && this.rear == -1)
        {
            console.log("The queue is empty");
        }
        else
        {
            for (let i = 0; i < this.queue.length; i++)
            {
                console.log(this.queue[i]);

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
myQueue.display();
myQueue.dequeue();

console.log(myQueue.peek());
myQueue.enQueue(70);
myQueue.display();