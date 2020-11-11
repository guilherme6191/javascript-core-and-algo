// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let n1 = num1.length - 1;
  let n2 = num2.length - 1;
  let result = '';
  let carry = 0;
  while (n1 >= 0 || n2 >= 0 || carry) {
    let sum = +(num1[n1] || '0') + +(num2[n2] || '0') + carry;
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    } else {
      carry = 0;
    }

    result = sum + result;
    n1--;
    n2--;
  }
  return result;
};
