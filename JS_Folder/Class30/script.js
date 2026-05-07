function Red() {
  document.getElementById("bulb1").style.backgroundColor = "Red";
}
function Green() {
  document.getElementById("bulb1").style.backgroundColor = "Green";
}
function Yellow() {
  document.getElementById("bulb1").style.backgroundColor = "Yellow";
}
function BulbOff() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
// call function

document.getElementById("bulb1").addEventListener("click,Changebulb1");

function Changebulb1() {
  const color = document.getElementById("bulb1").value;
  document.getElementById("bulb1").style.backgroundColor = "color";
}

function reset() {
  window.location.reload();
}
