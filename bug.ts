function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

const arr = [1, 2, 3, 4, 5];
arr.sort(compare); // This works fine
console.log(arr); // Output: [1, 2, 3, 4, 5]

const arr2 = [{ id: 5 }, { id: 1 }, { id: 3 }];
arr2.sort(compare); // This throws an error: Uncaught TypeError: Invalid comparison
console.log(arr2);