function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;

  // Simple validation, you can add more complex validation if needed
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("All fields must be filled out");
    return false;
  }

  // You can add more specific validation for the email field
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  showMessage();
  return true;
}
function showMessage() {
  alert("Thank you for submitting your message!");
}