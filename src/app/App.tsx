import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "app/provider/themeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./provider/router";
import "./styles/index.scss";
import { NavBar } from "widgets/NavBar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const bool = true;

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <hr />
      <NavBar />
      <hr />

      <AppRouter />
    </div>
  );
};

export default App;
