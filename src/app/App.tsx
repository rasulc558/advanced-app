import React from "react";
import { useTheme } from "app/provider/themeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./provider/router";
import "./styles/index.scss";
import { NavBar } from "widgets/NavBar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { SideBar } from "widgets/SideBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
