// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    if (!this.head) return 0;
    let cursor = this.head;
    let counter = 1;
    while (cursor.next) {
      counter++;
      cursor = cursor.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let cursor = this.head;
    while (cursor.next) {
      cursor = cursor.next;
    }
    return cursor;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let cursor = this.head;
    let next = cursor.next;
    while (next.next) {
      cursor = next;
      next = next.next;
    }
    cursor.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    let cursor = this.head;
    while (cursor.next) {
      cursor = cursor.next;
    }
    cursor.next = new Node(data);
  }

  getAt(n) {
    let counter = 0;
    let cursor = this.head;

    while (cursor) {
      if (counter === n) {
        return cursor;
      }
      counter++;
      cursor = cursor.next;
    }
    return null;
  }

  removeAt(n) {
    if (!this.head) return;
    if (n === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(n - 1);

    if (prev && prev.next) {
      prev.next = prev.next.next;
    }
  }

  insertAt(data, n) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (n === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    const prev = this.getAt(n - 1);
    if (!prev) {
      this.insertLast(data);
      return;
    }
    if (!prev.next) {
      prev.next = newNode;
      return;
    }
    if (prev && prev.next) {
      newNode.next = prev.next;
      prev.next = newNode;
    }
  }

  forEach(cb) {
    let node = this.head;
    let i = 0;
    while (node) {
      cb(node, i);
      node = node.next;
      i++;
    }
  }

  [Symbol.iterator]() {
    let node = this.head;

    return {
      next() {
        while (node) {
          const result = { done: false, value: node };
          node = node.next;
          return result;
        }

        return { done: true };
      },
    };
  }
}

module.exports = { Node, LinkedList };
