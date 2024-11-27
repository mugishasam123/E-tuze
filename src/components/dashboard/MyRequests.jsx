import React, { useState, useEffect } from "react";
import RequestCard from "../common/RequestCard/RequestCard";
import { Link } from "react-router-dom";
import { db, auth } from "../../utils/firebase";
import { collection, getDocs, query, where, addDoc, onSnapshot, orderBy ,serverTimestamp } from "firebase/firestore";
import { ClipLoader } from "react-spinners";

const fetchRequests = async () => {
  const requestsRef = collection(db, "requests");
  const userId = auth.currentUser.uid;
  const q = query(requestsRef, where("userID", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchRequests()
      .then(setRequests)
      .finally(() => setLoading(false));
  }, []);

 
  useEffect(() => {
    if (isChatOpen) {
      const messagesRef = collection(db, "messages");
  
      const q = query(messagesRef, orderBy("timestamp", "asc"));
  
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const allMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        console.log("All Messages:", allMessages);
  
        const userId = auth.currentUser?.uid;
        const userMessages = allMessages.filter(
          (msg) => msg.userId === userId || msg.sender === "therapist"
        );
  
        setMessages(userMessages);
      });
  
      return () => unsubscribe();
    }
  }, [isChatOpen]);
  
  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
  
    const userId = auth.currentUser?.uid;
    await addDoc(collection(db, "messages"), {
      text: newMessage,
      sender: "client",
      userId,
      timestamp: serverTimestamp(), 
    });
  
    setNewMessage('');
  };
  
  

  return (
    <>
      <h1 className="text-center text-5xl font-bold text-gray-600 mt-5">
        My Requests
      </h1>
      <main className="mx-2 w-full">
        <div className="p-5 mt-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <ClipLoader color="#36d7b7" />
            </div>
          ) : requests.length > 0 ? (
            requests.map((request) => (
              <Link
                to={`/client/dashboard/requests/${request.id}`}
                key={request.id}
              >
                <RequestCard request={request} />
              </Link>
            ))
          ) : (
            <p className="text-[gray] text-center">Once you have sent requests, they will show up here.</p>
          )}
        </div>
        
        {/* Chat Button */}
        <div className="fixed bottom-4 right-4 z-50">
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            {isChatOpen ? 'Close Chat' : 'Chat with the therapist'}
          </button>
        </div>

        
        {isChatOpen && (
          <div className="fixed bottom-20 right-4 w-[50vh] bg-white border rounded-lg shadow-lg z-50">
            <div className="p-4 bg-blue-500 text-white rounded-t-lg">
              chat with the therapist
            </div>
            
                
   <div className="h-64 overflow-y-auto p-4 flex flex-col">
 {messages.map((msg) => (
    <div
      key={msg.id}
      className={`mb-2 p-2 rounded-lg max-w-[70%] ${
        msg.sender === "therapist"
          ? "bg-gray-100 self-end text-right" 
          : "bg-blue-100 self-start text-left"
      }`}
    >
      {msg.text}
    </div>
  ))}
</div>





            <form onSubmit={sendMessage} className="flex p-2 border-t">
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
        )}
      </main>
    </>
  );
};

export default MyRequests;
