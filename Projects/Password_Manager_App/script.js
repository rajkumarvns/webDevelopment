const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    eyeIcon.classList.remove("bi-eye-slash");

    eyeIcon.classList.add("bi-eye");
  } else {
    passwordInput.type = "password";

    eyeIcon.classList.remove("bi-eye");

    eyeIcon.classList.add("bi-eye-slash");
  }
});
