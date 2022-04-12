class Node {
    constructor(data) {
        this.val = data
        this.next = null
        this.prev = null;
    }
}
class circulardoublyLinkedList {
    constructor(head = null) {
        this.head = head
    }
     addToEmptyList( data){
    let newNode = new Node(data);
    head = newNode;
    head.next = head;
    head.prev = head;
    return head;
}
//ADD TO THE BEGINNING
    createStart( data)
{
    let newNode = new Node(data);
    let temp = head;
    if (head == null)
{
    head = newNode;
    newNode.prev = head;
    newNode.next = head;
}
else
{

    while(temp.next!= head)
    {
        temp = temp.next;
    }

    temp.next = newNode;
    newNode.next = head;
    newNode.prev = temp;
    head.prev = newNode;
    head = newNode;


}
return head;
}
    //ADD TO THE End
    createEnd(data)
{
    let newNode = new Node(data);
    let temp = head;
    if(head == null)
{
    head = newNode;
    newNode.prev = head;
    newNode.next = head;
}
else
{
    while(temp.next!= head)
    {
        temp = temp.next;
    }
    temp.next = newNode;
    newNode.next = head;
    newNode.prev = temp;
    head.prev = newNode;
}
return head;
}
    //DELETE FIRST
  DeleteFirst()
    {
        let firstNode = head;
        let p = head;

        if(head== null) {
            return;
        }
        if (head.next == head)
        {
            head = null;
        }
        else
        {
            while(p.next!= head)
            {
                p = p.next;
            }
            let temp = head.next;
            head = temp;
            p.next = head;
            head.prev = p;
            firstNode = null;
        }
        return head

    }

    //DELET LAST NODE
   deleteEnd()
    {
        let firstNode = head;
        let p = head;
        if (head == null)
            return;
        if (head.next == head)
        {
            head = null;
        }
        else
        {
            while(p.next.next != head)
            {
                p = p.next;
            }
            let lastNode = p;
            p.next = head;
            head.prev = p;
            lastNode = null;
        }
        return head;
    }


}
let head = null;

const p = new circulardoublyLinkedList();
console.log( p.addToEmptyList(3));
console.log( p.createStart(2));
console.log( p.createEnd(4));
console.log( p.DeleteFirst());
console.log( p.deleteEnd());
