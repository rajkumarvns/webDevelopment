// 1. Change h1 text using getElementById
document.getElementById("mainHeading").innerHTML = "New Heading Set by JS";

// 2. Change paragraph on button click
function changeParagraph() {
  document.getElementById("para1").innerHTML = "Paragraph Changed!";
}

// 3. Set heading to "Welcome"
function setWelcome() {
  document.getElementById("heading2").innerHTML = "Welcome";
}

// 4. Read paragraph and print in console
function readParagraph() {
  let text = document.getElementById("para2").innerHTML;
  console.log(text);
}

// 5. Change content of element using DOM
document.getElementById("box").innerHTML = "Content Updated using DOM";

// 6. Change "Hello" to "Changed!"
function changeText() {
  document.getElementById("textChange").innerHTML = "Changed!";
}
function changeText() {
  document.getElementById("textChange").innerHTML = "Changed!";
}

// 7. Change both h1 and paragraph
function changeBoth() {
  document.getElementById("h1change").innerHTML = "New H1 Text";
  document.getElementById("pchange").innerHTML = "New Paragraph Text";
}
