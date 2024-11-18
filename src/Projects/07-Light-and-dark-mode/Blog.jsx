import React, { useContext } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { ThemeContext, themes } from "./context/theme-context";

function Blog() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="p-1 flex mt-11">
      <Title text={`Blog with ${theme} theme`} />
      <span className="absolute top-10 right-10 text-4xl rounded-3xl text-white">
        <Button
          text={theme === "dark" ? "Light" : "Dark"}
          btnClass={`${
            theme === "dark" &&
            "bg-black text-white p-2 rounded"
          } ${
            theme === "light" &&
            "bg-white text-black p-2 rounded"
          } `}
          onClick={changeTheme}
        />
      </span>

      <p className="mt-40">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, similique
        cupiditate quis nulla modi fugiat doloremque. Aliquam dolor beatae
        expedita impedit debitis dolorum, neque incidunt. Delectus ullam dicta
        neque vero.
      </p>
    </div>
  );
}

export default Blog;
