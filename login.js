document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    emailInput.addEventListener("input", function() {
        validateEmail();
    });

    passwordInput.addEventListener("input", function() {
        validatePassword();
    });

    function validateEmail() {
        var email = emailInput.value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            emailError.textContent = "Email is required";
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Invalid email address";
        } else {
            emailError.textContent = "";
        }
    }

    function validatePassword() {
        var password = passwordInput.value;
        if (!password) {
            passwordError.textContent = "Password is required";
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters";
        } else {
            passwordError.textContent = "";
        }
    }

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        validateEmail();
        validatePassword();
        if (!emailError.textContent && !passwordError.textContent) {
            // All validations passed, handle login logic here
            console.log("Form is valid. Proceed with login.");
            // You can call a function to handle login here
        }
    });
});
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});