import React, { useState } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';

const Chat = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Add the user's message to the chat history
    setChatHistory([...chatHistory, { type: 'user', message: userInput }]);

    // Respond based on the user's input
    if (userInput.toLowerCase() === 'hello') {
      setChatHistory([...chatHistory, { type: 'bot', message: 'Hi there!' }]);
    } else if (userInput.toLowerCase() === 'how are you?') {
      setChatHistory([
        ...chatHistory,
        {
          type: 'bot',
          message: 'I am a computer program, but thanks for asking!',
        },
      ]);
    } else {
      setChatHistory([
        ...chatHistory,
        { type: 'bot', message: 'I did not understand that.' },
      ]);
    }

    // Clear the user's input
    setUserInput('');
  };
  return (
    <>
      <div>
        <Sidebar />
        <Search />
      </div>
      <section className='Chat-section'>
        <div className='chat-container'>
          <div className='chat-history'>
            {chatHistory.map((entry, index) => (
              <div key={index} className={`message ${entry.type}`}>
                {entry.message}
              </div>
            ))}
          </div>
          <div className='user-input'>
            <input
              type='text'
              placeholder='Type a message...'
              value={userInput}
              onChange={handleUserInput}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
