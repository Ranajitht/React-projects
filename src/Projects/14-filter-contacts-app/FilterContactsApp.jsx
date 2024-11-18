import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import ContactsData from "./Data.json";
import Contact from "./Contact";

function FilterContactsApp() {
  let inputSearch = useRef(null);

  useEffect(() => {
    inputSearch.current.focus();
  });

  const [searchContact, setSearchContact] = useState("");

  return (
    <div className="text-center">
      <Title text={"FilterContactsApp"} />
      <input
        type="text"
        placeholder="Search by firstname"
        className="mb-8 py-1 px-2"
        ref={inputSearch}
        onChange={(e) => {
          setSearchContact(e.target.value);
        }}
      />
      <section className="flex gap-[15px] flex-wrap m-auto max-w-[1600px] ">
        {ContactsData.filter((contact) => {
          if (searchContact === "") {
            return contact;
          } else if (
            contact.first_name
              .toLocaleLowerCase()
              .includes(searchContact.toLocaleLowerCase())
          ) {
            return contact;
          }
        }).map((contact) => (
          <Contact contact={contact} />
        ))}
      </section>
    </div>
  );
}

export default FilterContactsApp;
