// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// [a] -> [b] -> [c] -> [d] -> 2
// s: 0, 1
// f: 2, 3
function fromLast(list, n) {
  let s = list.head;
  let f = list.head;

  while (n > 0) {
    f = f.next;
    n--;
  }

  while (f.next) {
    s = s.next;
    f = f.next;
  }
  return s;
}

module.exports = fromLast;
