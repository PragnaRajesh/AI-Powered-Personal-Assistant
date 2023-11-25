import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

import ChatMessage from './ChatMessage';

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (userInput) => {
    // Call a function to send the user's message to the backend (e.g., Dialogflow)
    // You need to implement the backend integration here.

    // For demonstration purposes, let's assume the AI responds immediately.
    const aiResponse = "This is an example response from the AI.";
    appendMessage("user", userInput);
    appendMessage("ai", aiResponse);
  };

  const appendMessage = (sender, message) => {
    setMessages(prevMessages => [...prevMessages, { sender, message }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>AI Personal Assistant</h2>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} message={msg.message} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button onClick={() => sendMessage(document.querySelector('input').value)}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
