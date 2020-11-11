// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0 s
//   / |  \
// 1   2   3 s
// |       |
// 4       5 s
// Answer: [1, 3, 2]

// result [1, 3]
// c: 1
// s: s 5

function levelWidth(root) {
  // BFS
  const queue = [root, null];
  const counters = [0];

  while (queue.length > 1) {
    let node = queue.shift();
    if (!node) {
      queue.push(null);
      counters.push(0);
    } else {
      queue.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;
