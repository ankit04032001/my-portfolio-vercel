"use client";
// @flow strict
import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";

function Chatbot() {
  // State to store chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm askAnkit, your AI assistant. Ask me anything about Ankit's work experience, projects, or skills!",
      timestamp: new Date()
    }
  ]);
  
  // State for user input
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Ref for auto-scrolling to latest message
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending message
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return; // Don't send empty messages or while loading

    const userInput = input.trim();
    
    // Add user message to chat
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: userInput,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput(''); // Clear input field
    setIsLoading(true);

    try {
      // Call the real AI chatbot API
      const response = await fetch(process.env.NEXT_PUBLIC_CHATBOT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userInput
        })
      });

      const data = await response.json();

      if (data.status === 'success' && data.response) {
        const botMessage = {
          id: messages.length + 2,
          type: 'bot',
          text: data.response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Chat with askAnkit</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] overflow-hidden">
        
        {/* Chat Messages Area (Scrollable) */}
        <div className="h-96 overflow-y-auto p-4 bg-[#0d1224] space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-r from-pink-500 to-violet-600 text-white'
                    : 'bg-[#1a1443] text-gray-200 border border-[#353a52]'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1443] text-gray-200 border border-[#353a52] px-4 py-2 rounded-lg">
                <p className="text-sm">askAnkit is typing...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area (Fixed at bottom) */}
        <div className="border-t border-[#464c6a] bg-[#10172d] p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Ankit's experience..."
              className="flex-1 bg-[#0d1224] border border-[#353a52] rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-[#16f2b3] focus:outline-none transition-all duration-300"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <IoSend size={20} />
              <span className="hidden md:inline">{isLoading ? 'Sending...' : 'Send'}</span>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            💡 Tips: Press Enter to send • Max 3 questions/min • Try asking about experience, skills, or projects
          </p>
        </div>

      </div>
    </div>
  );
};

export default Chatbot;
