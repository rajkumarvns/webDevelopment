document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const fn = document.getElementById("fullName").value;
  const gndr = document.querySelector("input[name = 'gender]:checked")?.value;

  const timings = [];
  document
    .querySelectorAll("input[name = 'timing']:checked")
    .forEach((item) => {
      timings.push(item.value);
    });
  console.log(gndr);

  console.log(timings);
});
document.getElementById("registrationForm").addEventListener("reset", (e) => {
  e.preventDefault();
  window.location.reload();
});
