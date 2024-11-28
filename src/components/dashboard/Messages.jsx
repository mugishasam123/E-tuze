import React, { useState, useEffect } from 'react';
import { db } from '../../utils/firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch all messages from Firestore

  useEffect(() => {
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc')); 

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
       
      } ));
     
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, []);

  // Send a new message to Firestore
  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const messagesRef = collection(db, 'messages');
    await addDoc(messagesRef, {
      text: newMessage,
      sender: 'therapist',
      timestamp: serverTimestamp(),
    });

    setNewMessage(''); 
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] ">
      {/* Messages Display */}
      <div className="flex-grow  p-4 bg-gray-100 mt-20">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 p-2 rounded-lg max-w-[70%] ${
              msg.sender === 'therapist'
                ? 'bg-blue-100 self-end ml-auto'
                : 'bg-gray-200'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input for Sending Messages */}
      <form onSubmit={sendMessage} className="flex p-4 border-t bg-white">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-grow p-2 border rounded-l-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Messages;
