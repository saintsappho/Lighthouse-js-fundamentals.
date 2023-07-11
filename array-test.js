let myArray = [1, 2, 3];

if (typeof myArray[Symbol.iterator] === 'function') {
  console.log('myArray is iterable');
} else {
  console.log('myArray is not iterable');
}
