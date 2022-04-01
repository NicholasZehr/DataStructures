// s.pop()
// console.log(s)






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




 
const Queue = require('./Queue'); 

let q = new Queue();

for (let i = 1; i < 7; i++){
    q.enqueue(i)
    console.log(q)
}
console.log(q)
q.dequeue()
console.log(q) 
console.log("peek", q.peek())
console.log("Length", q.length)
console.log("IsEmpty", q.isEmpty)
