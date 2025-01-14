function compare(a, b) {
  if (a.id < b.id) {
    return -1;
  } else if (a.id > b.id) {
    return 1;
  } else {
    return 0;
  }
}

const arr2 = [{ id: 5 }, { id: 1 }, { id: 3 }];
arr2.sort(compare); // Now this works correctly!
console.log(arr2); // Output: [{ id: 1 }, { id: 3 }, { id: 5 }] 
//The compare function is now explicitly comparing the 'id' property of each object.