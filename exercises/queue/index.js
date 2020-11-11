// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//FIFO
// <- [1, 2] <- // push and shift
// -> [1, 2] -> // unshift and pop
class Queue {
  constructor() {
    this.arr = [];
  }

  add(data) {
    this.arr.push(data);
  }

  remove() {
    return this.arr.shift();
  }
}

module.exports = Queue;
