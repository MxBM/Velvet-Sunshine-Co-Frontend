import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
//import Pages from "./utls/Pages"; //TODO: Centralize All Pages? Look into runtime of doing so.
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar changeTheme={changeTheme} currentTheme={theme} />
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/collections" component={<Collections />} />
          <Route path="/contact" component={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
