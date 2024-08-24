/* this is the home page */
"use client";
import React from "react";
import Info from "@/components/Info";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

import {
  SunIcon,
  LightningBoltIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

const homePage = () => {
  const router = useRouter();
  const { chatid: querychatid } = useParams();

  //onClick event: it should clear the input & render the screen to display the messages
  const sendMessage = (prompt: string) => {
    //only create a new chatid if it dosent already exist
    if (prompt.trim()) {
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
      messages.push(prompt);

      localStorage.setItem(chatid, JSON.stringify(messages));

      //only generate a new route agar new id bani thi
      if (!querychatid) {
        router.push(`/chat/${chatid}`);
      }
    }
  };

  return (
    <div className="main flex text-center items-center justify-evenly flex-col bg-background px-4">
      <h1 className="text-heading text-3xl mt-5 mb-5">LawLens AI</h1>
      <div className="features grid grid-cols-3 grid-rows-4 w-3/4 flex-1 gap-4  ">
        <div className="flex flex-col justify-center items-center col-start-1 text-center">
          <SunIcon className="text-foreground" />
          <p className="text-foreground bot mt-1 ">Examples</p>
        </div>
        <button
          onClick={() =>
            sendMessage(
              "Analyze a contract breach: John designs a logo for $2,000; the startup cancels and refuses payment."
            )
          }
          className=" col-start-1 row-start-2"
        >
          <Info prompt="Analyze a contract breach: John designs a logo for $2,000; the startup cancels and refuses payment." />
        </button>
        <button
          className="col-start-1 row-start-3"
          onClick={() =>
            sendMessage(
              "Interpret: 'Willfully injuring someone with a weapon is a felony, minimum five years imprisonment.'"
            )
          }
        >
          <Info prompt="Interpret: 'Willfully injuring someone with a weapon is a felony, minimum five years imprisonment.'" />
        </button>
        <button
          className="col-start-1 row-start-4"
          onClick={() =>
            sendMessage("Advise an online marketplace on minimizing liability.")
          }
        >
          <Info prompt="Advise an online marketplace on minimizing liability." />
        </button>

        {/* lightning from radixui */}
        <div className="flex flex-col justify-center items-center row-start-1 col-start-2 text-center">
          <LightningBoltIcon className="text-foreground" />
          <p className="text-foreground mt-1">Capabilities</p>
        </div>
        <div className="col-start-2 row-start-2 flex items-center ">
          <Info
            prompt="Remembers what user said
              earlier in the conversation"
          />
        </div>
        <div className="col-start-2 row-start-3">
          <Info prompt="Allows user to provide follow-up corrections" />
        </div>
        <div className="col-start-2 row-start-4">
          <Info
            prompt="Trained to decline inappropriate
  requests"
          />
        </div>
        <div className="flex flex-col justify-center items-center max-h-screen row-start-1 col-start-3">
          <ExclamationTriangleIcon className="text-foreground" />
          <p className="text-foreground mt-1">Limitations</p>
        </div>
        <Info
          prompt="May occasionally generate
  incorrent information"
        />
        <Info
          prompt="May occasionally produce
  harmful instructions or biased
  content"
        />
        <Info
          prompt="Limited knowledge of world and
  events after 2021"
        />
      </div>
    </div>
  );
};

export default homePage;
