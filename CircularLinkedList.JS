class Node {
    constructor(data) {
        this.val = data
        this.next = null
    }
}
class circularLinkedList {
    constructor(head = null) {
        this.head = head
    }
    addToEmptyList(data){
    let newNode = new Node(data);
    head = newNode;
    head.next = head;
    return head;
    }
    //Add to the beginning of list
    addToBegin( data)
{
    let newNode = new Node(data);
    if (head == null)
{

    head = newNode;
    head.next = head;
    return;
}
let temp = head;

while(temp.next != head)
{
    temp = temp.next;
}
temp.next = newNode;
newNode.next = head;
head = newNode;
return head;
}
   // ADD TO END OF LIST
  addToEnd(data)
{
    let newNode = new Node(data);
    if (head == null)
{

    head = newNode;
    head.next = head;
    return;
}
else
{
    let temp = head;
    while (temp.next != head)
        temp = temp.next;
    temp.next = newNode;
    newNode.next = head;

}
return head;
}
    //DELETE  FIRST
   deleteFirst()
    {
        if (head == null)
            return;
        if (head.next == head)
        {
            head = null;
        }
        else
        {
            let temp = head;
            let firstNode = head;
            while (temp.next != head)
            {
                temp = temp.next;
            }
            head = head.next;
            temp.next = head;
            firstNode = null;
        }
        return head;

    }
    //DELETE LAST
  deleteLast()
    {
        if (head == null)
            return;
        if (head.next == head)
        {
            head = null;
        }
        else
        {
            let temp = head;
            while(temp.next.next != head)
            {
                temp = temp.next;
            }
            let lastNode = temp.next;
            temp.next = head;
            lastNode = null;

        }
        return head;

    }
}

let head = null;

const p = new circularLinkedList();
console.log( p.addToEmptyList(3));
console.log( p.addToBegin(2));
console.log( p.addToEnd(4));
console.log( p.deleteFirst());
console.log( p.deleteLast());
//console.log( p.reverse(head));