let carName1 = "Volvo XC60";
let carName2 = "Volvo XC60";
console.log(carName1);
console.log(carName2);

let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = alpha.length;
console.log(length);

let text = `Hello World`;
let text1 = `He's often called "Johnny"`;
console.log(text);
console.log(text1);

let text2 = `The quick brown fox jumps over the lazy dog`;
console.log(text2);

let firstName = "Raj";
let lastName = "Gupta";
let textN = `Welcome ${firstName},${lastName}`;
console.log(textN);

let price = 10;
let VAT = 0.25;
let total = `Total:${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

let txt = "Hello JavaScript";
let char = txt.charAt(0);
console.log(char);

let char1 = txt.charCodeAt(0);
console.log(char1);

let char2 = txt.codePointAt(0);
console.log(char2);

const name = "       HelloRICR";
let letter = name.at(5);
console.log(letter);
let letter1 = name[6];
console.log(letter1);

let textn = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(textn);
console.log(part);

let partf = textn.slice(7);
console.log(partf);

let str = "Apple, Banana, Kiwi";
let parts = str.substring(7, 13);

let textt = "Hello World \uD800";
let result = textt.isWellFormed();
console.log(textt);

let txts = name.trim();
console.log(txts);
