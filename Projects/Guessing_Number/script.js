// Random number between 1 and 10
const hiddenNumber = Math.floor(Math.random() * 10) + 1;

let totalAttempts = 0;

// Select elements
const guessInput = document.getElementById("guess");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

// Submit button event
submitBtn.addEventListener("click", checkGuess);

// Enter key support
guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// Function to check guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  // Validation
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    message.textContent = "Please enter a valid number between 1 and 10.";
    return;
  }

  totalAttempts++;

  // Compare numbers
  if (userGuess > hiddenNumber) {
    message.textContent = " Try a smaller number.";
  } else if (userGuess < hiddenNumber) {
    message.textContent = " Try a larger number.";
  } else {
    message.textContent = `🎉 Congratulations! You guessed the number in ${totalAttempts} attempts.`;

    submitBtn.disabled = true;
  }

  // Show attempts
  attempts.textContent = `Attempts: ${totalAttempts}`;

  // Clear input
  guessInput.value = "";

  // Focus again
  guessInput.focus();
}

function restartGame() {
  location.reload();
}
