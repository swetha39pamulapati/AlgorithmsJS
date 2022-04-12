class stackData{
    constructor() {
        this.MAX = 10
        this.top = -1;
        this.stack = new Array(this.MAX);
    }
    isEmpty()
    {
        if (this.top == -1)
        {
            console.log("Stack is empty.");
        }
        else
        {
            console.log("Stack is not empty.");
        }
    }

    size()
    {
        return this.top + 1;
    }
    push( x)
{
    if (this.top == (this.MAX - 1))
{
    console.log("Stack size limit reached.");
}
else
{
    this.stack[++this.top] = x;
    //console.log(x + " is added into the stack.");
}
}
    pop()
    {
        if (this.top < 0)
        {
            console.log("Stack is empty.");
        }
        else
        {
            let x = this.stack[this.top--];
            console.log(x + " is deleted from the stack.");
        }
    }
    peek()
    {
        if (this.top < 0)
        {
            console.log("Stack is empty.");
            return 0;
        }
        else
        {
            //Console.WriteLine("Stack not empty.");
            return this.stack[this.top];
        }
    }
    print(){

        for (let i = this.top; i >= 0; i--)
        {
            console.log(this.stack[i]);
        }
    }
}
const Stack = new stackData();
Stack.push(10);
Stack.push(20);
Stack.push(30);
Stack.push(40);

console.log(Stack.print());
Stack.pop();
console.log(Stack.print());
console.log(Stack.peek());


