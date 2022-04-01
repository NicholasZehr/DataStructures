class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    insert(value) {
        this.length++;
        let newNode = new Node(value);
      
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
          return newNode;
        }
      
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
        //just print all of the nodes.
        let current = this.head;
        while (current) {
          console.log(current.value, ", ");
          current = current.next;
        }
      }
}
  
module.exports = LinkedList