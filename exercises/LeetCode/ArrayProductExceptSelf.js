// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let output = Array(nums.length);
  let productFromLeft = 1; 
  let productFromRight = 1;
  for (let i = 0; i < nums.length; i++) {
      output[i] = productFromLeft;
      productFromLeft *= nums[i];
  }
  console.log(output)
  console.log(productFromLeft)
  for (let j = nums.length-1; j >= 0; j--) {
      output[j] *= productFromRight; 
      productFromRight *= nums[j];
  }
  console.log(productFromRight)
  
  return output;
};
