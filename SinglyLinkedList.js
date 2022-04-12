// This Node class allows us to store a value for the Node itself as well as a  reference to the location in memory to the next node that may be present. If that node does not exist then we store null in the Node's next. Null will be the default when added a new node to LinkedList since our insert will be adding to the end. 
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

// The LinkedList class allows us to store the reference to the place in memory where the head of the list resides as well as where the tail resides. We are also keeping track of the length in this implementation of LinkedList. We also have access to a copy of these methods when we instantiate each LinkedList using the keyword new. The methods we have implemented in this class are insert, remove and print. 
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    insert(value) {
      this.length++;
      // make a new node to add
        let newNode = new Node(value);
      // if there is already a tail update references accordingly
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
          return newNode;
        }
      // if there is no tail the list we will set the head and tail references to the newNode objects location in memory. 
        this.head = this.tail = newNode;
        return newNode;
    }
    remove() {
        //if there is a tail do this section
        if (this.tail) {
          this.length--;
      
          const tailNode = this.tail;
            //Start from beginning
          let currentNode = this.head;
      
            //Need this loop since you can only transit
            // the list from beginning to end. 
          while (currentNode.next != tailNode) {
            currentNode = currentNode.next;
          }
      
          //setting the node right before the tail as new tail
          const beforeTail = currentNode;
          this.tail = beforeTail;
          this.tail.next = null;
          //return tail you just removed
          return tailNode;
        }
        //if there is no tail return undefined
        return undefined;
    }
    print() {
        //print all of the nodes.
        let current = this.head;
        while (current) {
          console.log(current.value, ", ");
          current = current.next;
        }
      }
}
  
module.exports = LinkedList