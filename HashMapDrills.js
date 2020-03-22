const HashMap = require('./HashMap');
function main() {
    const lotr = new HashMap();

    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    
    lotr.set("Hobbit", "Bilbo")
    lotr.set("Hobbit", "Frodo")
    lotr.set("Wizard", "Gandolf")
    lotr.set("Maiar", "The Necromancer")
    lotr.set("Maiar", "Sauron")
    lotr.set("RingBearer", "Gollum")
    lotr.set("LadyOfLight", "Galadriel")
    lotr.set("HalfElven", "Arwen")
    lotr.set("Ent", "Treebeard");
    
    // console.log(lotr)
    let maiar = lotr.get("Maiar");
    let hobbit = lotr.get("Hobbit");
  
    console.log("Maiar ->", maiar, "\nHobbit ->", hobbit);
  console.log(lotr._capacity);
  console.log(removeDuplicates("google all that you can think of"));
  console.log(findAnyPalindrome('racecar'))
}

//4 Remove duplicates 
function removeDuplicates(str) { 
  const letterMap = new HashMap();
  letterMap.MAX_LOAD_RATIO = .5;
  letterMap.SIZE_RATIO =3;

  let noRepeatString = ""
  for (let letter of str) {
    let count = letterMap.get(letter) ? letterMap.get(letter) : 0;
      if (count === 0) {
        noRepeatString += letter;
      }
    count++
    letterMap.set(letter, count);
  
    
  }
  return noRepeatString;

}
//5 any palindrome 
function findAnyPalindrome(str) {
  const letterMap = new HashMap();
  letterMap.MAX_LOAD_RATIO = .5;
  letterMap.SIZE_RATIO = 3;
  
  for (let letter of str) {
    let count = letterMap.get(letter) ? letterMap.get(letter) : 0;
    count++
    letterMap.set(letter, count);
  }
  let countArray = [];


  for (let obj of letterMap._hashTable) {
                 if (obj) {
                   countArray.push(obj.value);
                 }
           }
 
  let oneCount = 0;
  for (let num of countArray) {
    if (num > 2)
      return false;
    else if (num === 1) { 
      oneCount ++
    }
  }
  if (oneCount > 1) { 
    return false;
  }
  return true;
}
  



main();
