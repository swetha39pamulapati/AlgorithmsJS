class stack{
    constructor() {
        this.data =[];
        this.top = 0;
    }
    stackPush(element){
        this.data[this.top] = element;
        this.top =this.top+1

    }
    stackLength(){
        return this.top;
    }
    peek(){
        return this.data[this.top-1];
    }
    isEmpty() {
        return this.top == 0;
    }
    pop(){
        if(this.isEmpty() == false){
            this.top = this.top -1;
            return this.data.pop();
        }

    }
    print(){

        for (let i = this.top-1; i >= 0; i--)
        {
            console.log(this.data[i]);
        }
    }
}
const Stack = new stack();
Stack.stackPush(10);
Stack.stackPush(20);
Stack.stackPush(30);
Stack.stackPush(40);
console.log(Stack.print());
Stack.pop();
Stack.pop();
console.log(Stack.print());
console.log("The top element is " +Stack.peek());
console.log("The length  is " +Stack.stackLength());

