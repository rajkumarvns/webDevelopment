// Q1
for (var i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}
console.log("-------------------Q2---------------------");

// Q2
for (var a = 1; a < 10; a++) {
  console.log(a);
  if (a == 6) {
    break;
  }
}
console.log("-------------------Q3---------------------");
for (var x = 1; x <= 5; x++) {
  if (x == 3) {
    continue;
  }
  console.log(x);
}
console.log("-------------------Q4---------------------");

for (var p = 1; p < 20; p++) {
  if (p % 2 == 0) {
    continue;
  }
  console.log(p);
}

