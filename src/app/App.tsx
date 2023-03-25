import React from "react";
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "app/provider/themeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const bool = true;

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <hr />

      <ul>
        <li>
          <Link to="/"> Main Page</Link>
        </li>
        <li>
          <Link to="/about"> About Page</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
