// This Node class allows us to store a value for the Node itself as well as a  reference to the location in memory to the left and right nodes that may be present. If they do not exist then we store null in the Node's left and right.
class Node {
// The value passed in here is the value of the new node when it is created.
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
// The root is a reference to the place in memory where the starting node 
// is located. When the new BinarySearchTree is initialized the root will
// be null.
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
        }
        else { 
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            
            if (root.left === null) {
                root.left = newNode
            }
            else {
                this.insertNode(root.left, newNode)
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right, newNode)
            }

        }
    
    }
}

module.exports = BinarySearchTree