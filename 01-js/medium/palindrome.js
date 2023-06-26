/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var str1=str.toLowerCase().replace(/[^a-z0-9]/g,'');
  var rev =str1.split("").reverse().join('');
  if(str1==rev)
  return true;
  else
  return false;
}

module.exports = isPalindrome;
