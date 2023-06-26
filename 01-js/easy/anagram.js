/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 var arr1 = str1.split('').filter(char => char !== ' ');
  var arr2 = str2.split('').filter(char => char !== ' ');

  // Convert the arrays to lowercase
  arr1 = arr1.map(char => char.toLowerCase());
  arr2 = arr2.map(char => char.toLowerCase());

  // Sort the arrays
  arr1.sort();
  arr2.sort();

  // Compare the sorted arrays
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // Strings are anagrams
  return true;
}

module.exports = isAnagram;
