"use client";
import { useState } from "react";
import React from "react";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [response, setResponse] = useState("");

  const [inputMessage, setInputMessage] = useState("");

  const handleClick = () => {
    if (username.trim() == "") {
      setInputName("Please enter your name");
    }
    if (email.trim() == "") {
      setInputEmail("Please enter your email");
    }
    if (message.trim() == "") {
      setInputMessage("Please send us a message!!!");
    }
    if (username && email && message) {
      setInputName("");
      setInputEmail("");
      setInputMessage("");
      setUsername("");
      setEmail("");
      setMessage("");
      setResponse(`Hello ${username}, network unavailable,please whatsapp us`);
    }
  };

  return (
    <section className="py-10" id="contact">
      <div className="container">
        <div className="flex md:flex-row flex-col mt-5 gap-10">
          <div className="flex-1">
            <form className="flex flex-col gap-5">
              <p className="text-red-500 text-center">{inputName}</p>
              <input
                type="text"
                placeholder="Name"
                value={username}
                className="px-3 py-2 border-2"
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="text-red-500 text-center">{inputEmail}</p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="px-3 py-2 border-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-red-500 text-center">{inputMessage}</p>
              <textarea
                placeholder="Message..."
                value={message}
                className="h-[100px] px-5 py-2 border-2 resize-none"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </form>
            <button
              type="submit"
              onClick={handleClick}
              className="font-bold px-7 mt-5 py-2 rounded-full cursor-pointer text-white bg-green-800 hover:bg-accent-300"
            >
              Submit
            </button>

            <p className="text-red-500  font-bold text-xl text-center py-5">
              {response}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
