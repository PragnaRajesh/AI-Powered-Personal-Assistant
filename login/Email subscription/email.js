document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("subscribeForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const email = emailInput.value;

        // Validate email format
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Save email to local storage (for demonstration purposes)
        saveEmail(email);

        // Display confirmation message
        confirmationMessage.textContent = `Thank you for subscribing!`;
        emailInput.value = '';
    });

    function isValidEmail(email) {
        // Basic email validation (you might want to use a more robust solution)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function saveEmail(email) {
        // Save the email to local storage (for demonstration purposes)
        let subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
        subscribedEmails.push(email);
        localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));
    }
});
