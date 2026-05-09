const form = document.querySelector("form");

// Submit Event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("firstName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const dataPacket = {
    fullName: fn,
    email: em,
    password: ps,
  };

  console.log(dataPacket);

  document.getElementById("firstName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

// Reset Button Event
form.addEventListener("reset", (event) => {
  alert("The form has been reset!");
});

// Escape Key Reload (cross-browser safe)
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    window.location.reload();
  }
});
