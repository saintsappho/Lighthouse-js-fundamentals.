let lastIndexOf = function(set, ch){  
  for (let value of set){
    //finds index if correct
    if (ch === set[set.length - 1]){
      return set.length - 1 //finds index if correct
    } else if (ch != set[set.length - 1]){
      set.pop() //winnows down set if incorrect
      console.log(set)
    } 
  } set.pop()
    set.pop()
    set.pop()
    if (set.length === 0 || set === undefined || set.length === undefined){
    return -1 //returns -1 if set is empty
  }
}
//the word `array` is losing meaning. switching all instances to `set`
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);