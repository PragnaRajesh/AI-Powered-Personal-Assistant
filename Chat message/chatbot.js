function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    appendMessage("user", userInput);
    
    // Call a function to send the user's message to the backend (e.g., Dialogflow)
    // You need to implement the backend integration here.

    // For demonstration purposes, let's assume the AI responds immediately.
    var aiResponse = "This is an example response from the AI.";
    appendMessage("ai", aiResponse);

    // Clear the user input
    document.getElementById("userInput").value = "";
}

function appendMessage(sender, message) {
    var chatBody = document.getElementById("chatBody");
    var messageDiv = document.createElement("div");
    messageDiv.className = sender;
    messageDiv.innerHTML = `<strong>${sender.charAt(0).toUpperCase() + sender.slice(1)}:</strong> ${message}`;
    chatBody.appendChild(messageDiv);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;
}
