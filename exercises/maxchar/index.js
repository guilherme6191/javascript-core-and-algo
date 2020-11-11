// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// loop str,
// count equals and save in hashMap
// check what is the biggest and return its key
function maxChar(str) {
  let map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  return Object.entries(map).reduce((acc, curr) => (curr[1] > acc[1] ? curr : acc), [0, 0])[0];
}

//m.values().next().value
module.exports = maxChar;
