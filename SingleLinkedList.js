class Node {
    constructor(data) {
        this.val = data
        this.next = null
    }
}
class SingleLinkedList {
    constructor(head = null) {
        this.head = head
    }
    insertFront(data){
        let newNode = new Node (data);
        if(head == null){
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
        return head;
    }
    insertEnd( data){
    let newNode = new Node(data);
    if(head == null){
    head = newNode;
    return;
}
let p = head;
while(p.next!= null){
    p = p.next;
}
p.next = newNode;
return head;
}
    pushAtPosition( data,position) {
    let newNode = new Node(data);
    if(position<1)
    console.log("Index should be greater than 1");
    else if(position == 1){
    newNode.next = head;
    head = newNode;
}
else{
    let p = head;
    for(let i = 1; i<position-1; i++){
        if(p != null){
            P = p.next;
        }
    }
    if(p != null){
        newNode.next = p.next;
        p.next = newNode;
    }
    else{
        console.log("Previous Node is Null");
    }
}
return head;
}
    removeNodeatPosition( pos){
    if(head == null)
    return;
    if(pos<1)
    console.log("Pos should be >1");
    else if(pos ==1){
    let temp = head;
    head = head.next;
    temp = null;
}
else{
    let p = head;
    for(let i = 1; i<pos-1; i++){
        if(p!= null){
            P = p.next;
        }
    }
    if(p != null && p.next != null){
        let nodeToDel = p.next;
        p.next = p.next.next;
        nodeToDel = null;

    }
    else{
        console.log("Previous Node is Null");
    }
}
return head;
}
     removeNodeAtIndex( index){
    if(head == null)
    return;
    let p = head;
    if(index == 0){
    head = p.next;
}
for(let i = 0; i<index-1; i++){
    if(p!= null)
    p = p.next;
}
if(p!= null && p.next != null)
{
    let nodeToDel = p.next;
    p.next = p.next.next;
    nodeToDel = null;
}

else
console.log("Previous Node is Null");
return head;
}
    removeLastNode(){
    if(head == null || head.next == null )
    return;
    let p = head;
    while(p.next.next != null ){
    p = p.next;
}
p.next = null;
return head;
}
    removeFirstNode(){
    if(head == null )
    return null;
    head = head.next;
    return head;
}
    reverse(head){
    let prev = null;
    while(head != null){
    let nextNode = head.next;
    head.next =prev;
    prev = head;
    head = nextNode;
}
return prev;
}
    printList() {
        let node = new Node();
        while (node != null) {
            console.log(node.data);
            node = node.next;
        }

    }
}

let head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(4);

const p = new SingleLinkedList(head);
console.log( p.insertFront(1));
console.log( p.insertEnd(5));
//console.log( p.pushAtPosition(100,2));
//console.log( p.removeNodeatPosition(2));
//console.log( p.removeNodeAtIndex(2));
//console.log( p.removeLastNode());
//console.log( p.removeFirstNode());
console.log( p.reverse(head));