import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" to={"homepage component url"}>
        Helputer
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" to={"lessons component url"}>
              Lessons
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to={"hotkeys component url"}>
              Hotkeys
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to={"autopilots component url"}>
              Autopilots
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
