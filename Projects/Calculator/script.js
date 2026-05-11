function Calculate(data) {
  const text = document.getElementById("text");

  // Clear all
  if (data === "AC") {
    text.innerText = "0";
    return;
  }

  // Calculate result
  if (data === "=") {
    try {
      const result = eval(text.innerText);
      text.innerText = result;
    } catch (error) {
      text.innerText = "Error";
    }
    return;
  }

  // Delete last character
  if (data === "C") {
    text.innerText = text.innerText.slice(0, -1);

    // If empty after delete
    if (text.innerText === "") {
      text.innerText = "0";
    }
    return;
  }

  // Replace 0 with first value
  if (text.innerText === "0") {
    text.innerText = data;
  } else {
    text.innerText += data;
  }
}

// Keyboard Support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Numbers
  if (!isNaN(key)) {
    Calculate(key);
  }

  // Operators
  else if (
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/"
  ) {
    Calculate(key);
  }

  // Decimal point
  else if (key === ".") {
    Calculate(".");
  }

  // Enter key
  else if (key === "Enter") {
    event.preventDefault();
    Calculate("=");
  }

  // Backspace key
  else if (key === "Backspace") {
    Calculate("C");
  }

  // Escape key
  else if (key === "Escape") {
    Calculate("AC");
  }
});