// The Queue class allows us to store the object full of elements that we have 
// put in the queue. We are also able to keep track of the index for the next
// head and the tail.  We also have access to a copy of these methods when we 
// instantiate each Queue using the keyword new. The methods we have used in
// this class are enqueue, dequeue, peek. We also have access to the instance 
// properties via the get methods which are length and isEmpty. 
class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
}

module.exports =  Queue 