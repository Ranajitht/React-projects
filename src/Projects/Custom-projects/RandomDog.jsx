// src/FetchExample.js
import React, { useEffect, useState } from "react";
import Button from "../components/Button";

function RandomDog() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex bg-slate-400 h-[100vh] rounded-sm max-w-[100vw] flex-col self-center py-auto ">
      <h1 className="text-center w-[60vw] self-center text-3xl p-6 my-8 bg-yellow-300 rounded-xl">
        Random Dogs
      </h1>
      <img
        className=" max-w-[60%] m-auto rounded-md max-h-[60%] object-contain"
        src={data?.message}
        alt=""
      />
      <Button
        text="Click here to change the dog"
        btnClass={"p-8 bg-purple-500 text-3xl w-[60vw] self-center rounded-lg my-8"}
        onClick={fetchData}
      />
    </div>
  );
}

export default RandomDog;
