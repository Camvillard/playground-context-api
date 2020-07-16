import React, { useContext } from "react";
import { ThemeContext } from "./context/context";

export const Text = () => {
  const value = useContext(ThemeContext);
  return (
    <div>
      <p>this is the text component that reads from the theme : {value}</p>
    </div>
  );
};
