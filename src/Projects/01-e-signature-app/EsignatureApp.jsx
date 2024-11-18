import React, { useState } from "react";
import Title from "../components/Title";

function EsignatureApp() {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("Select Date");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  document.body.style.background = "#ae63ae";
  return (
    <div className="text-center">
      <Title classes={"text-4xl font-normal m-8"} text={name} />
      <Title
        classes={"text-4xl font-normal mb-7"}
        text={!date ? "DoB" : date}
      />
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, labore
        rerum. Quibusdam cumque nemo impedit molestiae nihil dolorum obcaecati
        repudiandae illo quam tempora, quo fugiat voluptatum perspiciatis
        blanditiis labore eveniet?
      </p>
      <footer className="flex justify-around relative top-60">
        <input
          className="border-b-4 border-dotted p-2"
          type="date"
          value={date}
          onChange={handleDateChange}
        />
        <input
          className="border-opacity-30 text-black p-2"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}

export default EsignatureApp;
