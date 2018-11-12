const HashMap = require('./HashMap');
const hashmap = new HashMap();

function printHashMap(map) {
  for (let slot in map._slots) {
    console.log(map._slots[slot]);
  }
}

function main() {
  hashmap.set('Hobbit', 'Bilbo');
  hashmap.set('Wizard', 'Gandalf');
  hashmap.set('Hobbit', 'Frodo');
  hashmap.set('Elf', 'Legolas');
  console.log(hashmap.get('Elf'));
  console.log(anagramOfPalindrome('starrats'), 'SHOULD BE TRUE');
  console.log(anagramOfPalindrome('shane and colin'), 'SHOULD BE FALSE');
  console.log(anagramOfPalindrome('lionoil'));


  //printHashMap(hashmap);
}

main();



//rstarratsr
function anagramOfPalindrome(string) {
  const map = new HashMap();
  let odd = 0;
  for (let i in string) {
    let charCount;
    try {
      charCount = map.get(string[i]);
      charCount++;
      charCount % 2 === 0 ? odd-- : odd++;
      map.set(string[i], charCount);
    }
    catch (e) {
      charCount = 1;
      map.set(string[i], charCount);
      odd++;
    }
  }
  return ((string.length % 2 === 0 && odd === 0)
    || (string.length % 2 === 1 && odd === 1));
}

//has even length --> even number of instances of letters
//has odd length --> only one letter can have an odd amount
//
//make hashmap
//key === the letter
//value === counter of that letter
//
//evaluate even or odd of each letter
//
//loop through once
//set a count for current letter at 0
//add 1 to coutner right away
//compare to the rest of them to find if there's a match
//set to hashmap
//change

function anagram(anagrams) {
  const map = new HashMap();
  let keys = [];

  for (let index in anagrams) {
    let word = anagrams[index];
    let sortedWord = word.split('').sort().join('');

    try{
      map.set(sortedWord, [...map.get(sortedWord), word]);
    }
    catch (e) {
      map.set(sortedWord, [word])
      keys.push(sortedWord);
    }
  }
  let result = [];
  for(let key in keys){
    result.push(map.get(keys[key]));
  }
  return result;
}
console.log(anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

