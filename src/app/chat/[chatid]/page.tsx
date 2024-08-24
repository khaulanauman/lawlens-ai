"use client";
//this is the individual chat page
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
const chatPage = () => {
  const [messages, setMessages] = useState([]);
  const { chatid } = useParams();

  useEffect(() => {
    const id = Array.isArray(chatid) ? chatid[0] : chatid;
    if (id) {
      const storedMessages = localStorage.getItem(id);
      const messages = storedMessages ? JSON.parse(storedMessages) : [];
      setMessages(messages);
    }
  }, [chatid]);
  return (
    <div className="chat-body mt-4 w-1/3 flex-1 flex ">
      <div className="chat flex flex-col max-h-[75vh] text-foreground overflow-auto ">
        {messages.map((msg, index) => (
          <div className="flex mt-3 justify-center items-center  ">
            <div className="chat-message w-3/4 flex p-5 text-left">
              <Avatar className="bg-white">
                <AvatarImage src="https://github.com/shadcn.png" alt="@logo" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="ml-3 text-left">{msg}</p>
            </div>
          </div>
        ))}
        <div className="flex mt-3 justify-center items-center bg-container">
          <div className="chat-message reciever w-3/4 flex p-5 text-left">
            <Avatar className="bg-white">
              <AvatarImage src="/logo.png" alt="@logo" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="ml-3 text-left">
              A chatbot is a computer program that simulates human conversation
              through voice commands or text chats or both. It can be integrated
              with various messaging platforms like Facebook Messenger,
              WhatsApp, WeChat, etc. and can be used for a variety of purposes,
              such as customer service, entertainment, and e-commerce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chatPage;
