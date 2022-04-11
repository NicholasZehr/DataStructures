class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null
    }
  }
  
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
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
  
module.exports = LinkedList