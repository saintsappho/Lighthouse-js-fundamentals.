
let range = function (start, end, step) {
  let array = [];
  let i = start;
  array.push(i);
  if (step <= 0 || start === undefined || end === undefined || step === undefined || end < start){ 
    return [];
  } else while (i < end) {
      i += step;
      if (i <= end) {
          array.push(i);
      }
    } return array;
  } 


console.log(range(-9, 3, 3));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
