import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./context/theme-context";

function LightAndDarkMode() {
  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  let docBody = document.body;

  useEffect(() => {
    switch (theme) {
      case themes.light:
        docBody.classList.remove("bg-black");
        docBody.classList.remove("text-white");

        docBody.classList.add("bg-white");
        docBody.classList.add("text-black");

        break;

      case themes.dark:
        docBody.classList.remove("bg-white");
        docBody.classList.remove("text-black");

        docBody.classList.add("bg-black");
        docBody.classList.add("text-white");

        break;

    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog theme={theme} />
    </ThemeContext.Provider>
  );
}

export default LightAndDarkMode;
