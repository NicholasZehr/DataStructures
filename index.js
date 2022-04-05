/* Stack Example
// const Stack = require('./Stack'); 

// let s = new Stack();

// for (let i = 1; i < 7; i++) {
//     s.push(i)
// }
// console.log(s)
// s.pop()
// s.pop()
// s.pop()
// s.pop()
// s.pop()
// s.pop()
// console.log(s)
// console.log("Peek? ",s.peek())
// console.log("Is empty", s.isEmpty())
*/
// Queue Example

// const Queue = require('./Queue'); 

// let q = new Queue();

// for (let i = 1; i < 7; i++){
//     q.enqueue(i)
//     console.log(q)
// }
// console.log(q)
// q.dequeue()
// console.log(q) 
// console.log("peek", q.peek())
// console.log("Length", q.length)
// console.log("IsEmpty", q.isEmpty)


// const LinkedList = require("./SinglyLinkedList");

// // Singly LinkedList 
// const sll = new LinkedList

// for (let i = 0; i < 7; i++) {
//     sll.insert(i)
// }
// console.log("Singly Linked List before removal")
// console.log("The head is:", sll.head)
// console.log("The tail is:", sll.tail)
// sll.print()
// sll.remove()
// console.log("Singly Linked List after removal")
// console.log("The head is:", sll.head)
// console.log("The tail is:", sll.tail)
// sll.print()

//BigKitten
const BigKitten = require("./BigKitten")

const lion = new BigKitten(false, "big", "Rawr")
const cheetah = new BigKitten(true, "small", "Meow")

lion.makeNoise()
console.log("Lion tail is", lion.tail)
console.log(lion.legs)
lion.setLegs = 3
console.log(lion.legs)
cheetah.makeNoise()
console.log("Cheetah tail is", cheetah.tail)