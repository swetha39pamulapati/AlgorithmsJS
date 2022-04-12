
class Node {
    constructor(data) {
        this.val = data
        this.next = null
        this.prev = null;
    }
}
class doublyLinkedList {
    constructor(head = null) {
        this.head = head
    }

    insertAtFront(data) {
        let newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        head.prev = newNode;
        newNode.next = head;
        head = newNode;
        return head;
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        let p = head;
        while (p.next != null) {
            p = p.next;
        }
        p.next = newNode;
        newNode.prev = p;
        return head;
    }

    pushAtPos(data, pos) {
        let newNode = new Node(data);
        if (head == null)
            return null;
        if (pos < 1)
            console.log("Position should be greater than 1");
        else if (pos == 1) {
            head.prev = newNode;
            newNode.next = head;
            head = newNode;
        } else {
            let p = head;
            for (let i = 1; i < pos - 1; i++) {
                if (p != null)
                    p = p.next;
            }
            if (p != null && p.next != null) {
                newNode.next = p.next;
                newNode.prev = p;
                p.next = newNode;
                newNode.next.prev = newNode;
            } else {
                console.log("Previous Node is null");
            }
        }
        return head;
    }

    removeAtPosition(data, position) {
        if (head == null)
            return null;
        if (position < 1)
            console.log("pos >=1");
        else if (position == 1) {
            let nodeToDel = head;
            head = head.next;
            nodeToDel = null;
            if (head != null)
                head.prev = null;
        } else {
            let p = head;
            for (let i = 1; i < position - 1; i++) {
                if (p != null)
                    p = p.next;
            }
            if (p != null && p.next != null) {
                let toDel = p.next;
                p.next = p.next.next;
                if (p.next.next != null)
                    p.next.next.prev = p.next;
                toDel = null;
            } else
                console.log("previous Node is null");
        }
        return head;
    }

    RemoveAtIndex(index) {
        if (head == null)
            return;
        let p = head;
        if (index == 0) {
            head = p.next;
            head.prev = null;
        } else {
            for (let i = 0; i < index - 1; i++) {
                if (p != null)
                    p = p.next;
            }
            if (p != null && p.next != null) {

                let toDel = p.next;
                p.next = p.next.next;
                toDel = null;
                if (p.next != null)
                    p.next.prev = p;
            } else {
                console.log("previous Node is null");
            }
        }
        return head;


    }

    RemoveFirst() {
        if (head == null)
            return;
        if (head.next == null) {
            head = null;
            return;

        } else {
            head = head.next;
            head.prev = null;
        }
        return head;
    }

    RemoveLast() {
        if (head == null)
            return;
        if (head.next == null)
            head = null;
        else {
            let p = head;
            while (p.next.next != null) {
                p = p.next;
            }
            let nodeToDel = p.next;
            p.next = null;
            nodeToDel = null;
        }
        return head;
    }

    reverse() {
       //Check reversedll.js file
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

const p = new doublyLinkedList(head);
//console.log( p.insertAtFront(1));
//console.log( p.insertAtEnd(5));
//console.log( p.pushAtPos(100,2));
//console.log( p.removeAtPosition(2));
//console.log( p.RemoveAtIndex(1));
//console.log( p.RemoveFirst());
//console.log( p.RemoveLast());
//console.log( p.reverse(head));
