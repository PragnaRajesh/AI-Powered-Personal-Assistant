function sendMessage() {
    const userMessage = document.getElementById('user-message').value;
    if (userMessage.trim() !== '') {
        document.getElementById('chat-window').innerHTML += `<div class="user-message">${userMessage}</div>`;
        document.getElementById('user-message').value = '';

        // Send the user message to Dialogflow
        detectIntent(userMessage);
    }
}

function detectIntent(userMessage) {
    const chatWindow = document.getElementById('chat-window');

    // Replace 'YOUR_DIALOGFLOW_API_KEY' with your actual Dialogflow API key
    const apiKey = 'YOUR_DIALOGFLOW_API_KEY';
    const dfMessenger = new window.dfMessenger({ apiKey });
    dfMessenger.render(chatWindow);
    dfMessenger.renderResponses([{ queryResult: { fulfillmentText: userMessage } }]);
}
