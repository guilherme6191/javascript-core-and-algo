// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// ->
// <-
//     6, 7
// s1 [2,3,4,5,6]
// s2 []:
//  -> [1,2,3] ->
class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  moveStack(source, target) {
    while (source.peek()) {
      target.push(source.pop());
    }
  }

  add(record) {
    this.s1.push(record);
  }

  moveAndDo(fn) {
    let temp;
    this.moveStack(this.s1, this.s2);
    temp = fn.call(this.s2);
    this.moveStack(this.s2, this.s1);
    return temp;
  }

  remove() {
    return this.moveAndDo(Stack.prototype.pop);
  }

  peek() {
    return this.moveAndDo(Stack.prototype.peek);
  }
}

module.exports = Queue;
