import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./components/counter";
import "./index.scss";
import AboutPage from "./pages/AboutPage";
import { AboutPageAsync } from "./pages/AboutPage.async";
import MainPage from "./pages/MainPage";
import { MainPageAsync } from "./pages/MainPage.async";

const App = () => {
  return (
    <div className="app">
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
