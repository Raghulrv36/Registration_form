// Selecting id
document.addEventListener('DOMContentLoaded', function(){
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var submitButton = document.getElementById("btn");

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    // Function to validate input fields
    function validateForm() {
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validate Email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Invalid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validate Password
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        // Enable or Disable Submit Button
        submitButton.disabled = !isValid;
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    // Prevent form submission if there are validation errors
    document.getElementById('registrationForm').addEventListener('submit', function(event){
        validateForm();
        if (submitButton.disabled) {
            event.preventDefault();
        }
    });
});
