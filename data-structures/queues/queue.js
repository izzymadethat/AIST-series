/******** Queues: Data Structures That Follow FIFO ****** */

// Method 1
// class Queue {
//     constructor() {
//         this.items = new Array()
//     }

//     // add items to the end of the list
//     enqueue(value) {
//         this.items.push(value)
//     }

//     // remove first item and shift new item to the front of the list
//     dequeue() {
//         return this.items.shift()
//     }
// }

/*********** Method 2 ************/
class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.list = new Array()
        this.head = null
        this.tail = null
    }

    insert(value) {
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }

    push(value) {
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    shift() {
        if (!this.head) return

        let oldHead = this.head

        this.head = this.head.next

        if (this.head) {
            this.head.prev = null
        } else {
            this.tail = null
        }

        return oldHead
    }

    // Optional: For getSize() in Optimized Queue
    size() {
        return this.list.length
    }

    // Optional: For getItems() in Optimized Queue
    itemValues() {
        return this.list.map(item => console.log(item.value))
    }
}

class OptimizedQueue {
    constructor() {
        this.items = new DoublyLinkedList()
    }

    enqueue(value) {
        this.items.push(value) //The push from doubly linked list :)
    }

    dequeue() {
        let removedItem = this.items.shift()
        return removedItem
    }

    //  ====== Optional =======
    peek() {
        return this.items.head.value
    }

    getSize() {
        return this.items.size()
    }

    getItemValues() {
        this.items.itemValues()
    }
}

// Method 1 Specs
// let n = 100_000
// let queue = new Queue()

// let enqueueStart = new Date()
// for (let i = 0; i < n; i++) {
//     queue.enqueue(i)
// }
// let enqueueEnd = new Date()

// console.log(`Total time: ${enqueueEnd - enqueueStart}ms`) // ~5-9ms

// let dequeueStart = new Date()
// for (let i = 0; i < n; i++) {
//     queue.dequeue(i)
// }
// let dequeueEnd = new Date()

// console.log(`Total time: ${dequeueEnd - dequeueStart}ms`) // ~1240-1350ms

// Method 2 Specs
let n = 100_000
let queue = new OptimizedQueue()

let enqueueStart = new Date()
for (let i = 0; i < n; i++) {
    queue.enqueue(i)
}
let enqueueEnd = new Date()
console.log(`Total time: ${enqueueEnd - enqueueStart}ms`) // ~13-18ms

let dequeueStart = new Date()
for (let i = 0; i < n; i++) {
    queue.dequeue(i)
}
let dequeueEnd = new Date()

console.log(`Total time: ${dequeueEnd - dequeueStart}ms`) // ~3-5ms