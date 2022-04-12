class Queue {
    constructor() {
        this.storage = {}
        this.last = 0
        this.first = 0
    }

    peek() {
        return this.storage[this.first]
    }

    size() {
        return this.last -this.first
    }

    isEmpty() {
        return this.last === this.first
    }

    dequeue() {
        let first = this.storage[this.first]
        delete this.storage[this.first]
        this.first++
        return first
    }

    enqueue(val) {
        this.storage[this.last] = val
        this.last++
    }
}

var MyStack = function() {

    this.queue1 = new Queue();
    this.queue2 = new Queue();
};

MyStack.prototype.push = function (x) {
    this.queue1.enqueue(x);
};
MyStack.prototype.pop = function () {
    if (this.queue1.size() == 0)
        return;
    while (this.queue1.size() != 1)
    {
        this.queue2.enqueue(this.queue1.dequeue());
    }
    console.log( "The element deleted is " +this.queue1.dequeue());

    let temp = this.queue1
    this.queue1 = this.queue2
    this.queue2 = temp
};
MyStack.prototype.top = function() {
    if (this.queue1.size() == 0)
        return -1;
    while (this.queue1.size() > 1)
        this.queue2.enqueue(this.queue1.dequeue());
    let top = this.queue1.dequeue();
    this.queue2.enqueue(top);
    let temp = this.queue1
    this.queue1 = this.queue2
    this.queue2 = temp
    return top;
};
MyStack.prototype.empty = function() {
    if (this.queue1.size() == 0)
        return true;
    return false;
};

const  p = new MyStack();
p.push(5);
p.push(6);
console.log(p.pop());
console.log(p.top());
console.log(p.empty());