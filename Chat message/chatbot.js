let userInput;

        document.addEventListener("DOMContentLoaded", function () {
            userInput = document.getElementById("user-message");
            const sendButton = document.getElementById("send-button");

            sendButton.addEventListener("click", sendMessage);
            userInput.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    sendMessage();
                }
            });

            // Fetch the welcome message once when the page loads
            fetchWelcomeMessage();

            function fetchWelcomeMessage() {
                const chatContainer = document.getElementById("chat-container");
                const welcomeMessage = "Hey there! I'm Genius, your AI Personal Assistant designed to bring a touch of innovation and joy to your day. Need answers, a friendly chat, or assistance with anything? Just let me know—I'm here to help! How can I brighten your day?";
                appendMessage("Genius", welcomeMessage);
            }

            function sendMessage() {
                const userMessage = userInput.value;

                if (userMessage.trim() !== "") {
                    appendMessage("user", userMessage);
                    simulateAIResponse();
                    userInput.value = "";
                }
            }

            function simulateAIResponse() {
                const aiResponse = "This is an example response from the AI.";
                appendMessage("Genius", aiResponse);
            }

            function appendMessage(sender, message) {
                const chatContainer = document.getElementById("chat-container");
                const messageDiv = document.createElement("div");
                messageDiv.className = sender;
                messageDiv.innerHTML = `<strong>${sender.charAt(0).toUpperCase() + sender.slice(1)}:</strong> ${message}`;
                chatContainer.appendChild(messageDiv);
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }

        });