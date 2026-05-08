document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const dataPacket = {
    fullName: fn,
    email: em,
    password: ps,
  };

  console.log(dataPacket);

  // Clear form fields
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});


// Reset Button
document.getElementById("form").addEventListener("reset", (event) => {
  event.preventDefault();

  const confirmReset = confirm("Are you sure?");

  if (confirmReset) {
    window.location.reload();
  }
});


// Escape Key Reload
document.addEventListener("keydown", (event) => {
  let keyPress = event.key;

  if (keyPress === "Escape") {
    window.location.reload();
  }
});