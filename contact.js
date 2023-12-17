function Valid() {
  var yourNameInput = document.getElementById("YourName");
  if (yourNameInput.value.length < 3) {
    alert("Your Name must be at least 3 characters long.");
    return false;
  }

  var yourEmailInput = document.getElementById("YourEmail");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(yourEmailInput.value)) {
    alert("Please enter a valid email address.");
    return false;
  }

  var yourMessageInput = document.getElementById("YourMessage");
  if (yourMessageInput.value.length < 10) {
    alert("Your Message must be at least 10 characters long.");
    return false;
  }

  return true;
}
