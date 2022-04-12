class queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
        this.Max = 6;
        this.top1 = -1;
        this.top2 = -1;
        this.count = 0;
        this.stack1 = new Array(this.Max);
        this.stack2 = new Array(this.Max);
    }
    enQueue(data)
    {
    this.push1(data);
    this.count++;
}
push1(data){
        if(this.top1 == this.Max-1){
            console.log("Queue is full");
        }
        else{
            this.stack1[++this.top1] = data;
            console.log(data + "is added to queue");
        }
}
deQueue(){
        console.log("Dequeue :")
        if(this.top1 == -1 && this.top2 == -1){
            console.log("The Queue is full");
        }
        else{
            for(let i = 0; i<this.count; i++){
                let x = this.pop1();
                this.push2(x);
            }
        }
        let y = this.pop2();
        //console.log("the deleted item is" +y);
    this.count--;
    for(let i=0;i<this.count; i++)
    {
        let z = this.pop2();
        this.push1(z);
    }
}
pop1(){
        if(this.top1 == -1){
            console.log("Queue is empty");
        }
        else{
            let temp = this.stack1[this.top1];
            //console.log("The popped item is" +temp);
            this.top1--;
            return temp;
        }
}
pop2()
    {
        if (this.top2 == -1)
        {
            console.log("Stack is empty");
        }
        else
        {
            let pop = this.stack2[this.top2];
            this.top2--;
            return pop;
        }
    }
push2(x){
    if(this.top2 == this.Max-1){
        console.log("Queue is full");
    }
    else{
        this.stack2[++this.top2] = x;
        console.log(x + "is added to queue");
    }
}
   peek()
    {
        if (this.top1 == -1 && this.top2 == -1)
        {
            console.log("Stack is empty");
        }
        else
        {
            for (let i = 0; i < this.count; i++)
            {
                let x = this.pop1();
                this.push2(x);
            }
            let y = this.stack2[this.top2];
            console.log("The top element is :" + y);
            for (let i = 0; i < this.count; i++)
            {
                let z = this.pop2();
                this.push1(z);
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
//myQueue.printList();
myQueue.deQueue();
console.log(myQueue.peek());