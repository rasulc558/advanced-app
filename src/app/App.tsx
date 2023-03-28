import React, { Suspense } from "react";
import { useTheme } from "app/provider/themeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./provider/router";
import "./styles/index.scss";
import { NavBar } from "widgets/NavBar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { SideBar } from "widgets/SideBar";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="loading">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
