const Node = require("./linked-list-node")

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insert(value) {
        let newNode = new Node(value)

        if (this.isEmpty()) {
            this.head = newNode
        } else {
            // If we have an existing head value
            // point the newNode to it
            // then make new node the head
            newNode.next = this.head
            this.head = newNode
        }

        this.size++
    }

    push(value) {
        let newNode = new Node(value)

        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode

        }

        this.size++
    }

    shift() {
        // Remove node at head
        let topNode = this.head
        if (!topNode) return
        this.head = topNode.next
        this.length--

        return topNode
    }

    pop() {
        // Don't do anything if the list is Empty
        if (this.isEmpty()) {
            return
        }

        // establish variable for removedNode to be returned
        let removedNode;

        // If this node is the only node in the list, it is the head
        // so make the head of the list point to null
        // after grabbing the value
        if (this.size === 1) {
            removedNode = this.head;
            this.head = null
        } else {

            // otherwise, let's traverse through each node until the next to last one points to
            // a node that points to null
            // this means the node to remove is the current node's next value is the one to remove
            // also means that we have to point the current node to a null value now
            let current = this.head;
            while (current.next.next) {
                current = current.next
            }

            removedNode = current.next;
            current.next = null

        }
        // regardless of the situation, decrease the size
        // and return the value found to be used for later
        this.size--;
        return removedNode.value;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.insert(value);
        } else {
            const node = new Node(value);
            let prev = this.head;

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    isEmpty() {
        return this.head === null
    }
}