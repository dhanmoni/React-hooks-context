import React, { useContext } from "react";
import { ThemeContext } from "../ContextAPI/ThemeContext";

const ThemeToggle = () => {
  const { dispatch } = useContext(ThemeContext);
  return (
    <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
