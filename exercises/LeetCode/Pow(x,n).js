// Implement pow(x, n), which calculates x raised to the power n (i.e. xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= xn <= 104

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (a, b) {
  if (b === 0) return 1;
  else if (b === 1) return a;
  else if (b === -1) return 1 / a;
  else if (b % 2 == 0) {
    let t = myPow(a, b / 2);
    return t * t;
  } else if (b % 2 != 0) {
    return a * myPow(a, b - 1);
  }
};
