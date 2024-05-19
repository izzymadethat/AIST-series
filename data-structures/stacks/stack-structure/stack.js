/**
 * Stack: 
 * linear data structure that follows LIFO
 */
class Stack {
    constructor(maxSize = 100) {
        this.maxSize = maxSize
        this.count = 0
        this.data = new Array(this.maxSize)
    }

    /**
     * push()
     * - takes any value and stores at the top of
     * - stack as element
     * @param {any} value
     * @returns updated Stack Structure 
     */
    push(value) {
        this.data.push(value)
        this.count++
        return this
    }

    /**
     * pop()
     * removes element last added and returns as value
     * @returns value that was last added
     */

    pop() {
        if (this.isEmpty()) return undefined

        let element = this.data.pop()
        this.count--
        return element
    }

    /**
     * peek()
     * read-only view of last item in the list
     * @returns the last element in the list
     */
    peek() {
        if (this.isEmpty()) return undefined
        return this.data[this.data.length - 1]
    }

    size() {
        return this.count
    }


    /**
     * 
     * @returns {Array} array of all elements inside
     */
    print() {
        return this.data.map(element => element)
    }

    /********************OPTIONAL********************** */
    isEmpty() {
        return this.count === 0
    }

    resize(amount) {
        let newStack = new Stack(amount)

        for (let i = 0; i < this.data.length; i++) {
            newStack.data.push(this.data[i])
            this.count++
        }

        this.maxSize = amount
        this.count = newStack.count
        this.data = newStack.data

    }

    clear() {
        this.data = new Array(this.maxSize)
    }

    contains(element) {
        return this.item.includes(element) ? true : false
    }

    /********* Bonus **********************/
    reverse() {
        this.data.reverse()
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());  // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
stack.print();             // Output: 10,20
stack.clear();
console.log(stack.isEmpty()); // Output: true