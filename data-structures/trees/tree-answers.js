// Build a binary tree node
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}



// Build a Binary Search Tree
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    /**
     * insert()
     * - allows for adding a tree node to our BST
     * - if there's no root value, the newly created node is the root
     * - otherwise...
     * - if the value is less than the root, place it to the left
     * - or if greater place it to the right 
     * @param {number} value 
     * @param {TreeNode} currentNode
     */
    insert(value, currentNode = this.root) {
        if (!this.root) {
            this.root = new TreeNode(value)
            console.log(`Root Node is now ${this.root.value}`)
            return
        }

        // starting from root
        // is our value < the current node we're on?
        if (value < currentNode.value) {
            // yes.. is there already a left node?
            if (currentNode.left) {
                // yes.. then rerun the function with the current
                // node's left side
                this.insert(value, currentNode.left)
            } else {
                // no.. congrats, we've found a place for our new node
                currentNode.left = new TreeNode(value)
                console.log(`New node added to the left of ${currentNode.value}: ${currentNode.left.value}`)
            }
            // our value is not < so it's > the current node
        } else {
            // is there already a right node ?
            if (currentNode.right) {
                // yes.. then rerun the function with the current
                // node's left side
                this.insert(value, currentNode.right)
            } else {
                // no.. congrats, we've found a place for our new node
                currentNode.right = new TreeNode(value)
                console.log(`New node added to the right of ${currentNode.value}: ${currentNode.right.value}`)
            }
        }
    }

    breadthFirstTraversal() {
        let queue = [this.root] // add first node to queue

        while (queue.length > 0) {
            let currentNode = queue.shift() // remove first node in line

            console.log(currentNode.value) // process the node

            if (currentNode.left) {
                queue.push(currentNode.left) // push in left node if there
            }

            if (currentNode.right) {
                queue.push(currentNode.right) // then push in right if there
            }

            // repeat every thing until the entire queue is empty
        }
    }


    // Depth-First Traversals
    preOrderTraversal(currentNode = this.root) {
        if (!currentNode) return

        console.log(currentNode.value) // print the current node
        this.preOrderTraversal(currentNode.left) // visit the left subtree
        this.preOrderTraversal(currentNode.right) // visit the right subtree
    }

    inOrderTraversal(currentNode = this.root) {
        if (!currentNode) return

        this.inOrderTraversal(currentNode.left) // visit the left subtree
        console.log(currentNode.value) // print the current node
        this.inOrderTraversal(currentNode.right) // visit the right subtree
    }

    postOrderTraversal(currentNode = this.root) {
        if (!currentNode) return

        this.postOrderTraversal(currentNode.left) // visit the left subtree
        this.postOrderTraversal(currentNode.right) // visit the right subtree
        console.log(currentNode.value) // print the current node
    }
}

let bst = new BinarySearchTree()

bst.insert(50)
bst.insert(40)
bst.insert(45)
bst.insert(20)
bst.insert(70)
bst.insert(30)
bst.insert(60)
bst.insert(80)
bst.insert(10)

// Current Tree Structure
//               50
//             /   \
//           40     70
//          /  \   /  \
//        20   45 60   80
//       /  \
//     10    30

console.log("Pre-Order Traversal")
bst.preOrderTraversal()

console.log("==============================")

console.log("In-Order Traversal")
bst.inOrderTraversal()

console.log("==============================")

console.log("Post-Order Traversal")
bst.postOrderTraversal()


console.log("==============================")

console.log("Breadth-First Traversal")
bst.breadthFirstTraversal()