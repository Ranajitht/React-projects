import React from "react";

function Contact({ contact, width=300 }) {
  return (
    <div
      key={contact.id}
      className={`flex justify-center flex-col p-9 self-center w-[${width}px] bg-slate-300 h-[200px] m-auto`}
      
    >
      <div className="font-bold bg-cyan-300 text-black">{contact.first_name}</div>
      <div className="text-left">
        <h4 className="flex p-2 text-center">
          <span className="font-bold">Last Name:</span>
          {contact.last_name}
        </h4>
        <p className="p-2">
          <span className="font-bold flex flex-wrap">Email:</span>
          {contact.email}
        </p>
        <p className="p-2">
          <span className="font-bold">Phone:</span>
          {contact.phone}
        </p>
        <p className="p-2">
          <span className="font-bold">User Name:</span>
          {contact.user_name}
        </p>
      </div>
    </div>
  );
}

export default Contact;
