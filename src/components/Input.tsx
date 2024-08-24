"use client";
import { Paperclip } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowUpIcon } from "@radix-ui/react-icons";
const Input = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const { chatid: querychatid } = useParams();

  //onClick event: it should clear the input & render the screen to display the messages
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //only create a new chatid if it dosent already exist
    if (input.trim()) {
      const chatid =
        typeof querychatid === "string"
          ? querychatid
          : Array.isArray(querychatid)
          ? querychatid[0]
          : //new id sirf tab generate ho when u've confirmed ke querychatid is neither a string nor an array matlab it is null
            uuidv4();

      const storedMessages = localStorage.getItem(chatid);
      const messages = storedMessages ? JSON.parse(storedMessages) : [];

      //add the new message to the array
      messages.push(input);

      localStorage.setItem(chatid, JSON.stringify(messages));

      setInput("");

      //only generate a new route agar new id bani thi
      if (!querychatid) {
        router.push(`/chat/${chatid}`);
      }
    }
  };
  return (
    <form onSubmit={sendMessage} className="w-3/4 flex bg-container p-1 ">
      <button className="bg-container hover:bg-inherit mx-2">
        <Paperclip className="text-foreground " />
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="harrypotter@.com"
        className="border-none bg-container p-2 w-full "
      />
      <button type="submit" className="bg-container hover:bg-inherit px-3">
        <ArrowUpIcon />
      </button>
    </form>
  );
};

export default Input;
