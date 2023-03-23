import React from "react";
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage.async";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
