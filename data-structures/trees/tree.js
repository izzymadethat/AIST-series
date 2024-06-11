class TreeNode {
    // build a basic binary tree node
}

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

    }


    breadthFirstTraversal() {
        // create a queue and add root to it
        // iterate through the queue while it's not empty
        // dequeue (remove from front of queue) the first node
        // process the node
        // if the node isn't what we're looking for find its left
        // and right nodes and push both into queue
        // repeat until the value is found or we reach the 
        // end of the queue
    }


    preOrderTraversal(currentNode = root) {
        // if there's no current node we've either reached
        // the end or the tree is empty, so return upward
        // or exit the algorithm
        // process the current node
        // go all the the way to the left side of the subtree
        // then go all the way to the right side of the subtree
        // repeat line 105-107 until finished

    }
    inOrderTraversal(currentNode = root) {
        // if there's no current node we've either reached
        // the end or the tree is empty, so return upward
        // or exit the algorithm
        // go all the the way to the left side of the subtree
        // process the current node
        // then go all the way to the right side of the subtree
        // repeat line 115-17 until finished
    }
    inOrderTraversal(currentNode = root) {
        // if there's no current node we've either reached
        // the end or the tree is empty, so return upward
        // or exit the algorithm
        // go all the the way to the left side of the subtree
        // then go all the way to the right side of the subtree
        // process the current node
        // repeat line 124-126 until finished
    }

}

// ===================== TEST =======================
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

// Expected Tree Structure
//               50
//             /   \
//           40     70
//          /  \   /  \
//        20   45 60   80
//       /  \
//     10    30

console.log("Pre-Order Traversal")
bst.preOrderTraversal() // Expected: 50, 40, 20, 10, 30, 45, 70, 60, 80

console.log("==============================")

console.log("In-Order Traversal")
bst.inOrderTraversal() // Expected: 10, 20, 30, 40, 50, 60, 70, 80

console.log("==============================")

console.log("Post-Order Traversal")
bst.postOrderTraversal() // Expected: 10, 30, 20, 45, 40, 60, 80, 70, 50

console.log("==============================")

console.log("Breadth-First Traversal")
bst.breadthFirstTraversal() // Expected: 50, 40, 70, 20, 45, 60, 80, 10, 30