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

  // Clear form fields
  form.reset();
});


// Reset Button Event
form.addEventListener("reset", (event) => {
  
  const confirmReset = confirm("Are you sure you want to reset the form?");
  // If user clicks Cancel
  if (!confirmReset) {
    event.preventDefault();
  }
});


// Escape Key Reload
document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    window.location.reload();
  }

});