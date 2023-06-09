import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, message };
    fetch("https://getform.io/f/5d9343ad-4ef9-4c9d-b002-8bdc7499c46f", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        toast.success("Submitted Successfully!")
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      name="Contact"
      className=" w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to work along</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            id="myForm"
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              placeholder="Enter your message"
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
