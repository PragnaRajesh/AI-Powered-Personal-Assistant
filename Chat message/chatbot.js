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
        const welcomeMessage = "Hey there! I'm Genius, your AI Personal Assistant designed to bring a touch of innovation and joy to your day. Need answers, a friendly chat, or assistance with anything? Just let me know—I'm here to help! How can I brighten your day?";
        appendMessage("Genius", welcomeMessage, true);
    }

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            appendMessage("user", userMessage);
            handleUserInput(userMessage);
            userInput.value = "";
        }
    }

    function handleUserInput(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        
        if(lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")){
            greetUser();
        } else if (lowerCaseMessage.includes("tell me a joke")){
            tellJoke();
        } else if (lowerCaseMessage.includes("what's the latest news")){
            getNews();
        } else if (lowerCaseMessage.includes("shopping")){
            provideShoppingTips();
        } else if (lowerCaseMessage.includes("relationship advice")){
            offerRelationshipAdvice();
        } else if (lowerCaseMessage.includes("vent")){
            provideListeningEar();
        } else if (lowerCaseMessage.includes("speech") || lowerCaseMessage.includes("text help")){
            assistWithSpeechOrText();
        } else {
            callDialogflow(userMessage);
        }
    }

    function greetUser() {
        const greeting = "Hey! what’s on your mind  today?";
        appendMessage("Genius", greeting);
    }

    function tellJoke() {
        const joke = "I ordered a chicken and an egg from Amazon. I'll let you know.";
        appendMessage("Genius", joke);
    }
    function getNews() {
        // Mocking news information for demonstration purposes
        const newsInfo = "In today's news, scientists make a groundbreaking discovery.";
        appendMessage("Genius", newsInfo);
    }
    function provideShoppingTips() {
        // Mocking shopping tips for demonstration purposes
        const shoppingTips = "Here are some shopping tips: 1. Make a list, 2. Set a budget, 3. Compare prices.";
        appendMessage("Genius", shoppingTips);
    }
    function offerRelationshipAdvice() {
        // Mocking relationship advice for demonstration purposes
        const relationshipAdvice = "Communication is key, and always make time for each other.";
        appendMessage("Genius", relationshipAdvice);
    }
    
    function provideListeningEar() {
        // Mocking a listening ear for venting
        const listeningResponse = "I'm here to listen. Feel free to share your thoughts and feelings.";
        appendMessage("Genius", listeningResponse);
    }
    
    function assistWithSpeechOrText() {
        // Mocking assistance with speech or text
        const assistanceInfo = "If you need help with speech or text, let me know your specific requirements.";
        appendMessage("Genius", assistanceInfo);
    }

    function callDialogflow(userMessage) {
        const projectId = 'ai-powered-personal-assistant';
        const apiKey = 'AIzaSyBdfpHYHQ3iG03iNRoMntHHO9TGLm7ZR6Y';
        const apiUrl = 'const apiUrl = `https://cors-anywhere.herokuapp.low.googleapis.com/v2/projects/${ai-powered-personal-assistant}/agent/sessions/${Date.now()}/detectIntent?key=${AIzaSyBdfpHYHQ3iG03iNRoMntHHO9TGLm7ZR6Y}';
        // Construct the request object
        const request = {
            queryInput: {
                text: {
                    text: userMessage,
                    languageCode: 'en-US',
                },
            },
        };

        // Make a POST request to Dialogflow API
        $.ajax({
            url: apiUrl,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(request),
            success: function (response) {
                const fulfillmentText = response.queryResult.fulfillmentText;
                appendMessage("Genius", fulfillmentText);
            },
            error: function () {
                console.error('Error calling Dialogflow API');
            },
        });
        const aiResponse = "This is an example response from the AI.";
        appendMessage("Genius", aiResponse);
    }

    function appendMessage(sender, message, isWelcomeMessage = false) {
        const chatContainer = document.getElementById("chat-container");
        const messageDiv = document.createElement("div");
        const senderName = isWelcomeMessage ? "": (sender === "user" ? "You:" : "Genius:");
        messageDiv.className = sender === "user" ? "user-message" : "genius-message";
        messageDiv.innerHTML = `<strong>${senderName}</strong> ${message}`;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});
