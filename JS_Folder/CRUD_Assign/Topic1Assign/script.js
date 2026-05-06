// Q1
arr = [];
console.log(arr);
arr.push("user1");
arr.push("user2");
console.log(arr);

// Q2
users = ["Raj","Raunit","Prasoon","Anit","Ayush"];
console.log(users);

//Q3 Access first user
console.log(users.at(4));

// Q4 find user 
// console.log(users.find(2));

// Q5 find 

// Q6 Update from Anit ot ashok
users.splice(3,1,"Ashok");
// users.splice(0,1,"RICR");
console.log(users);

// Q7 remove one user
// users.filter("Ashok");
// console.log(users);

// Q9
user1 = [];
user1.push("User1");
user1.push("User2");
console.log(user1);

//10 update one user
user1.splice(1,0,"Raj");
console.log(user1[1]);

// Q11
students = ["Raj","Amit","Shivanshu","Prasoon","Anit"];
students.pop();
console.log(students);

// Q12 used Q2  users array in there
student2Marks = [10,20,30,40,50];
console.log(student2Marks);

student2Marks.push(60);
console.log(student2Marks);

student2Marks.splice(2,1,35);
console.log(student2Marks);
























