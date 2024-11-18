import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiComment } from "react-icons/bi";

function TestimonialsApp() {
  /*  const handleClick = () => {
    console.log("button clicked");
  };
  */

  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="flex flex-col">
      <Title text={"Testimonials App"} classes={"mt-10 mb-10 text-center"} />
      <Button
        text={"Posts"}
        btnClass="text-white bg-blue-400"
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials("Posts")}
      />
      {""}

      <Button
        text={"Users"}
        btnClass="text-white bg-blue-400"
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("Users")}
      />

      <Button
        text={"Comments"}
        btnClass="text-white bg-blue-400"
        icon={<BiComment />}
        onClick={() => setTestimonials("Comments")}
      />

      <Title
        classes={"mt-10 text-center"}
        text={!testimonials ? "Select from above" : testimonials}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="text-center flex flex-col" key={item.id}>
                {item.name && <h2 className="text-green-500">{item.name}</h2>}
                <div className="p-10 border-4 border-slate-900">
                  <h4 className="text-green-700">{item.title}</h4>
                  <p>{item.body} </p>
                </div>
                {item.email && <small className="text-red-500">{item.email}</small>}
              </div>
            );
          })}
    </div>
  );
}
export default TestimonialsApp;
