// creation(C)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Read(R)
console.log(arr);

// Updation(U)
arr[2] = arr[2] + 10;
console.log(arr);

// deletion(D)
arr = [];
console.log(arr);

// basics methods of Array
let arr = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(arr);
// push
arr.push(99);
console.log(arr);
// pop
arr.pop(70);
// delete elements at the last index element
console.log(arr);
arr.unshift(11);
// unshift it mean if add data at the starting of the array of index[0]
console.log(arr);
arr.shift(12);
// delete elements at last
console.log(arr);

console.log(arr.at(4));

console.log(arr.indexOf(80));
// find elements in the array
console.log(arr.includes(70));
// ascending array
let newArray = [86, 87, 3, 8, 0, 2, 6, 9];
console.log(newArray);
newArray.sort();
console.log(newArray);

// reverse
newArray.reverse();
console.log(newArray);
// for each loop
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.forEach((element) => {
  console.log(element);
});
