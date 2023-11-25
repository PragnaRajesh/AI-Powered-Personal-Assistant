// AIAssistant.jsx

import React, { useState } from 'react';
import 'app.css';

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');
    // In a real implementation, you would send the user's message to the AI service (Dialogflow, Rasa, etc.) and handle the response.
  };

  return (
    <div className="ai-assistant-container">
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === 'user' ? 'user-message' : 'assistant-message'}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default chatbot;
