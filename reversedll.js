

    var head;

    class Node {
    constructor(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
}
}
    function reverse() {
    var temp = null;
    while (head != null) {
    temp = head.prev;
    head.prev = head.next;
    head.next = temp;
    head = head.prev;
}

    if (temp != null) {
    head = temp.prev;
}
}
    function push(new_data) {
    var new_node = new Node(new_data);
    new_node.prev = null;
    new_node.next = head;
    if (head != null) {
    head.prev = new_node;
}
    head = new_node;
}
    function printList(node) {
    while (node != null) {
    console.log(node.data );
    node = node.next;
}
}
    push(2);
    push(4);
    push(8);
    push(10);

    printList(head);

    reverse();
    console.log("The reversed Linked List is <br/>");
    printList(head);


