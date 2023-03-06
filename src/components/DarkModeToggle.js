import React from "react";
import { UserContext } from "../context/user";

function DarkModeToggle() {

  const { theme, setTheme } = useContext(UserContext)

  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
