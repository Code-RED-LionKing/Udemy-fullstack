const modal = document.getElementById("config-overlay");
const confirmButton = document.getElementById("confirm-config-btn");
const cancelButton = document.getElementById("cancel-config-btn");
const playerNameInput = document.getElementById("playername");

// Listen for Enter keypress to submit form
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && modal.classList.contains("active")) {
    event.preventDefault();
    confirmButton.click();
  }
});

// Listen for Escape keypress to close modal
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    event.preventDefault();
    cancelButton.click();
  }
});

// Listen for form submission and handle the action
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const playerName = playerNameInput.value.trim();
  if (playerName) {
    // TODO: handle the submission with the player name
    console.log("Player name submitted: " + playerName);
  }
});

// Listen for cancel button click and close the modal
cancelButton.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("active");
});

// Listen for confirm button click and submit the form
confirmButton.addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector("form").submit();
});


//사용하지 않는 코드.