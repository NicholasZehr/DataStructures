// This Node class allows us to store a value for the Node itself as well as a  reference to the location in memory to the next and previous nodes that may be present. If that node does not exist then we store null in the Node's next and or prev. Null will be the default for next and prev when we add a new node then we will update the next and prev references based on which end of the DLL we add the node to. 
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null
    }
  }

// The DoublyLinkedList (DLL) class allows us to store the reference to the place in memory where the head of the list resides as well as where the tail resides. We are also keeping track of the length in this implementation of LinkedList. We also have access to a copy of these methods when we instantiate each LinkedList using the keyword new. The methods we have implemented in this class are insertTail, insertHead, remove and print. 
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // insertTail places a newly created node at the end of the DLL
  insertTail(value) {
        this.length++;
        let newNode = new Node(value);
      
      if (this.tail) {
          this.tail.next = newNode;
          newNode.prev = this.tail
          this.tail = newNode;
          return newNode;
        }
      
        this.head = this.tail = newNode;
        return newNode;
  }
  // insertTail places a newly created node at the beginning of the DLL
  insertHead(value) {
    this.length++;
    let newNode = new Node(value)
    if (this.head) {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
      return newNode
    }
    this.head = this.tail = newNode
    return newNode
  }
  // insertTail removes the tail at the end of the DLL
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
        //just print all of the nodes.
        let current = this.head;
        while (current) {
          console.log(current.value, ", ");
          current = current.next;
        }
  }
}
  
module.exports = DoublyLinkedList