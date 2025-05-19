import React, { useState } from "react";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-3 font-semibold">
            Support Chat
          </div>

          {/* Body */}
          <div className="flex-1 px-4 py-2 text-sm text-gray-700 overflow-y-auto bg-gray-50">
            <p className="text-gray-500 italic">Hi there! 👋 How can we help?</p>
          </div>

          {/* Input area */}
          <div className="flex items-center px-4 py-2 border-t bg-white gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring-indigo-500"
              disabled
            />
            <button className="text-white bg-indigo-500 px-3 py-2 rounded-md text-sm" disabled>
              Send
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-indigo-600 text-white shadow-xl flex items-center justify-center text-2xl"
        aria-label="Toggle Chat"
      >
        💬
      </button>
    </div>
  );
};

export default ChatWidget;
