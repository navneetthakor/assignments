/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // convert to lower case 
    str = str.toLowerCase();

    // creating set
    const mySet = new Set();
    mySet.add('a');
    mySet.add('e');
    mySet.add('i');
    mySet.add('o');
    mySet.add('u');

    let ans = 0;

    for(let char of str){
      ans += mySet.has(char) ? 1 : 0;
    }
    // console.log(str)
    // console.log(ans)

    return ans;
}

module.exports = countVowels;