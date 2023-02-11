function binarySearchString(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let words = ["apple", "banana", "cherry", "date", "elderberry"];
let target = "cherry";

let result = binarySearchString(words, target);

if (result === -1) {
  console.log(`${target} was not found in the array`);
} else {
  console.log(`${target} was found at index ${result}`);
}
