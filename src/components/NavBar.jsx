import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";

import { headUrl, lessonsUrl, hotkeysUrl, autopilotsUrl } from "../constants";

function AppNavBar(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded} bg="light">
      <Link className="navbar-brand" to={headUrl}>
        Helputer
      </Link>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          onClick={() => {
            if (expanded) setExpanded(!expanded);
          }}
        >
          <NavLink className="nav-link" to={lessonsUrl}>
            Lessons
          </NavLink>
          <NavLink className="nav-link" to={hotkeysUrl}>
            Hotkeys
          </NavLink>
          <NavLink className="nav-link" to={autopilotsUrl}>
            Autopilots
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavBar;
