import React from "react";
import { useTheme } from "app/provider/themeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./provider/router";
import "./styles/index.scss";
import { NavBar } from "widgets/NavBar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <ThemeSwitcher />
      <hr />
      <NavBar />
      <hr />

      <AppRouter />
    </div>
  );
};

export default App;
