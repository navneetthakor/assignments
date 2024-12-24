/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // object to hold occurances of characters 
  const charOccurance = {};

  // going through str1 
  for(let char of str1){
    char = char.toLowerCase();
    if(!charOccurance[char]){
      charOccurance[char] = 1;
    }else{
      charOccurance[char]++;
    }
  }

  // going through str2 
  for(let char of str2){
    char = char.toLowerCase();
    if(!charOccurance[char] || charOccurance[char] == 0){
      return false;
    }

    charOccurance[char]--;
  }

  // checking whether we meet or not 
  for(let key of Object.keys(charOccurance)){
    if(charOccurance[key] != 0) return false;
  }

  return true;

}

module.exports = isAnagram;
