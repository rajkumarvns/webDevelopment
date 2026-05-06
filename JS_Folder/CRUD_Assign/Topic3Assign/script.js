console.log("-----------------Q1 indexOf----------------------");

let arr = [5,6,8,8,72,2,9,54,1,7,0,4,22];
console.log(arr.indexOf(4));

console.log("-----------------Q2 includes----------------------");
console.log(arr.includes(5));

console.log("-----------------Q3 indexOf value exist or not----------------------");
console.log(arr.indexOf(80));

console.log("-----------------Q4 includes exist or not exist----------------------");
console.log(arr.includes(54));
console.log(arr.includes(77));

console.log("-----------------Q5 find items----------------------");
console.log(arr.find((val) => val > 9));

console.log("-----------------Q6 find element based on condition ----------------------");
console.log(arr.find((val) => val >=20 && val < 54));

console.log("-----------------Q7 filter number----------------------");
console.log(arr.filter((val) => val >=5));

console.log("-----------------Q8 matching element from an array----------------------");
console.log(arr.filter((val) => val >7 && val <=8));

console.log("-----------------Q9 default sort----------------------");
arr.sort();
console.log(arr);

console.log("-----------------Q10 sort ascending order----------------------");
arr.sort((a,b) => a-b);
console.log(arr);
console.log("-----------------Q11 sort descending order----------------------");
arr.sort((a,b) => b-a);
console.log(arr);

console.log("-----------------Q12 all checks----------------------");
// check value using includes
console.log(arr.includes(1));
// find index using index
let ar = [5,6,8,8,72,2,9,54,1,7,0,4,22];
console.log(ar.indexOf(1));
// filter values
console.log(arr.filter((val) => val>5));
// sort final array but ascending order
ar.sort((a,b) => a-b);
console.log(ar);

















