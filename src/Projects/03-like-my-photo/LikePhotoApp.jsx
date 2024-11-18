import React, { useState } from "react";
import Title from "../components/Title";
import { GoSmiley, GoHeartFill } from "react-icons/go";
import { AiOutlineHeart, AiOutlineComment, AiFillHeart } from "react-icons/ai";
import dog from "./dog.avif";

export default function LikePhotoApp() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const likeHi = () => {
    setLike(true);
      setCount(count + 1);
  };
  

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  

  

  return (
    <div className="text-center">
      <Title text={"Like Photo App"} />
      <Title classes={"mt-8"} text={`Likes ${count}`} />

      <div className="w-[300px] shadow-md justify-self-center mt-10 cursor-pointer bg-gray-600">
        <div className="flex justify-center text-white p-6">
          <GoSmiley className="text-4xl text-yellow-300 mr-4 " />
          <small> Doggy Dog</small>
        </div>
        <img src={dog} alt="image" className="object-contain bg-yellow-400" onDoubleClick={likeHi} />

        <div className="text-xl flex justify-between ">
          <AiOutlineComment className="text-4xl text-white" />
          {like ? (
            <AiFillHeart
              className=" text-4xl text-red-600"
              onClick={toggleLike}
            />
          ) : (
            <AiOutlineHeart
              className="text-4xl text-white"
              onClick={toggleLike}
            />
          )}
        </div>
      </div>
    </div>
  );
}
