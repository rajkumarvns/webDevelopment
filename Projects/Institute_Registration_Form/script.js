document.getElementById("registrationFrom").addEventListener("submit", (e) => {
  e.preventDefault();

  // Inputs
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;
  const qualification = document.getElementById("qualification").value;
  const marks = document.getElementById("marks").value.trim();
  const course = document.getElementById("course").value;
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pin").value.trim();
  const guardianName = document.getElementById("guardianName").value.trim();
  const guardianNumber = document.getElementById("guardianNumber").value.trim();

  // Error spans
  const fullNameError = document.getElementById("fullNameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const dobError = document.getElementById("dobError");
  const qualificationError = document.getElementById("qualificationError");
  const marksError = document.getElementById("marksError");
  const courseError = document.getElementById("courseError");
  const timingsError = document.getElementById("timingsError");
  const addressError = document.getElementById("addressError");
  const cityError = document.getElementById("cityError");
  const pinError = document.getElementById("pinError");
  const guardianError = document.getElementById("guardianError");
  const guardianNumberError = document.getElementById("guardianNumberError");

  // Clear previous errors
  fullNameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";
  dobError.innerText = "";
  qualificationError.innerText = "";
  marksError.innerText = "";
  courseError.innerText = "";
  timingsError.innerText = "";
  addressError.innerText = "";
  cityError.innerText = "";
  pinError.innerText = "";
  guardianError.innerText = "";
  guardianNumberError.innerText = "";

  // Patterns
  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[A-Za-z\d]+@gmail\.com$/;
  const phonePattern = /^[6-9]\d{9}$/;
  const pinPattern = /^\d{6}$/;

  let isValid = true;

  // Full Name
  if (!namePattern.test(fullName)) {
    fullNameError.innerText = "Enter valid full name";
    isValid = false;
  }

  // Email
  if (!emailPattern.test(email)) {
    emailError.innerText = "Enter valid gmail";
    isValid = false;
  }

  // Phone
  if (!phonePattern.test(phone)) {
    phoneError.innerText = "Enter valid mobile number";
    isValid = false;
  }

  // DOB
  if (dob === "") {
    dobError.innerText = "Select date of birth";
    isValid = false;
  }

  // Qualification
  if (qualification === "") {
    qualificationError.innerText = "Select qualification";
    isValid = false;
  }

  // Marks
  if (marks === "") {
    marksError.innerText = "Enter marks";
    isValid = false;
  }

  // Course
  if (course === "") {
    courseError.innerText = "Select course";
    isValid = false;
  }

  // Timings
  const timings = document.querySelectorAll("input[name='timings']:checked");

  if (timings.length === 0) {
    timingsError.innerText = "Select at least one timing";
    isValid = false;
  }

  // Address
  if (address === "") {
    addressError.innerText = "Enter address";
    isValid = false;
  }

  // City
  if (!namePattern.test(city)) {
    cityError.innerText = "Enter valid city";
    isValid = false;
  }

  // Pin
  if (!pinPattern.test(pin)) {
    pinError.innerText = "Enter valid pin code";
    isValid = false;
  }

  // Guardian Name
  if (!namePattern.test(guardianName)) {
    guardianError.innerText = "Enter valid guardian name";
    isValid = false;
  }

  // Guardian Number
  if (!phonePattern.test(guardianNumber)) {
    guardianNumberError.innerText = "Enter valid guardian number";
    isValid = false;
  }

  // Final Submit
  if (isValid) {
    alert("Form Submitted Successfully");
  }
});
