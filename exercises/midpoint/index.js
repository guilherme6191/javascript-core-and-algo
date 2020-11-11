// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// [1] -> [2] -> [3] -> [4] => [5] => [6]

// s: 1, 2, 3
// f: 1, 3, 5
function midpoint(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

module.exports = midpoint;

// if (list.size() < 3) {
//   return list.getAt(0);
// }
// const rawMidpoint = list.size() / 2;
// const midpoint = rawMidpoint % 2 === 0 ? parseInt(rawMidpoint) - 1 : parseInt(rawMidpoint);
// return list.getAt(midpoint);
