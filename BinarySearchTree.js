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
// The insert method will take the value and create a new node with it.
// it will then determine if the instance of this BST has a root. When 
// no root is present it will store a reference to the newly create node 
// in the root of this BST. If there is already a root reference present 
// then we will call our helper function insertNode in order to sort the 
// newly created node into it's apropiate position in the BST.     
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
        }
        else { 
            this.insertNode(this.root, newNode)
        }
    }
// insertNode is a helper function that we can recursively call in order
// to sort a newly created node (newNode) into it's appropiate spot in our 
// BST. The (root) of this function is simply whichever node we're evaluting in // order to position references to the newNode approptiately.
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