body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-image: url('https://pngtree.com/freebackground/technology-robot-blue-technology-sense-lines_1481946.html');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
}

#assistant {
    max-width: 600px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
}

#chat-container {
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 20px;
}

#user-input {
    display: flex;
    align-items: center;
}

#user-message {
    flex: 1;
    height: 40px;
    padding: 8px;
    border: 1px solid #000;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    font-size: 16px;
}

#send-button {
    padding: 8px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;
}

#send-button i {
    font-size: 16px;
}

#send-button:hover {
    background-color: #45a049;
}
