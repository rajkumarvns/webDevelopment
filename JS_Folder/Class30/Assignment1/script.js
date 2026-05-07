// 2. DOM property (onclick)
document.getElementById("domBtn2").onclick = function () {
  console.log("DOM property button clicked!");
};

// 3. addEventListener
document.getElementById("listenerBtn2").addEventListener("click", function () {
  console.log("Listener button clicked!");
});

// 4. keydown
document
  .getElementById("keydownInput2")
  .addEventListener("keydown", function (event) {
    console.log("Key down: " + event.key);
  });

// 5. keyup
document
  .getElementById("keyupInput2")
  .addEventListener("keyup", function (event) {
    console.log("Key up: " + event.key);
  });

// 6. Form submit
document.getElementById("form2").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted!");
});

// 7. Change event
document.getElementById("changeInput2").addEventListener("change", function () {
  document.getElementById("changeOutput2").textContent =
    "You entered: " + this.value;
});

// 8. Input event
document.getElementById("liveInput2").addEventListener("input", function () {
  document.getElementById("liveOutput2").textContent = "Typing: " + this.value;
});
