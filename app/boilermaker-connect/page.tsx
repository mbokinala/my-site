"use client";

import { useState } from "react";
import { sendBoilermakerConnectEmail } from "../actions";

export default function BoilermakerConnect() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full lg:w-2/5 flex flex-col h-screen px-12 lg:px-0 mx-auto">
      <img
        src="https://purduemascots.weebly.com/uploads/2/7/9/2/27922619/2290806.jpg"
        alt="Purdue Boilermaker"
        className="w-32 h-auto mx-auto mt-8"
      />
      <h1 className="mt-8 text-5xl font-bold">Are you a Boilermaker?</h1>
      <p className="mt-4 text-lg">
        I&apos;m actively trying to connect with more Purdue students interested
        in entrepreneurship, the SF startup scene, and cool technology in
        general. If this is you, please enter your Purdue email below and
        I&apos;ll send over an email with my direct contact info.{" "}
        <span className="font-bold">Boiler up!</span>
      </p>

      <div className="mt-8 flex flex-row gap-2 items-center">
        <input
          className=" p-2 rounded-lg border grow"
          type="email"
          placeholder="pete@purdue.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className=" px-4 rounded-lg border bg-stone-200 hover:bg-stone-300 h-full"
          onClick={async () => {
            try {
              await sendBoilermakerConnectEmail(email);
              setEmail("");
              alert("Check your email for a message with my contact info!");
            } catch (error) {
              alert((error as Error).message);
            }
          }}
        >
          🚂
        </button>
      </div>
    </div>
  );
}
