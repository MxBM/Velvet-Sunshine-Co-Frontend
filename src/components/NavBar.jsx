import React, { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import "../scss/components/NavBar.scss";

export default function NavBar({ changeTheme, currentTheme }) {
  const [theme, setTheme] = useState(false);

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="header-inner">
            <div className="logo">
              <span href>VelvetSunshine Co.</span> 
              <li onClick={changeTheme} className="theme-mode">
                {currentTheme === "dark" ? (
                  <ImSun className="sun" />
                ) : (
                  <BsMoonFill className="moon" />
                )}
              </li>
            </div>
            <div className="navigation">
              <nav>
                <ul className="nav_list_grid">
                  {["Home", "Shop", "Collections", "About"].map((item) => (
                    <li className="nav_item" key={`link-${item}`}>
                      <div />
                      <a className="nav_link" href={`#${item}`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="nav-login">
              <div className="login">
                <a href="/">Log In</a>
              </div>
              <div className="cart">
                <a href="/">Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
