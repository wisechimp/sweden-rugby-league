import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

import SocialMediaLinks from "./socialmedialinks"

export default (props) => (
  <Navbar bg="dark" expand="sm" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand className="actionBar">{props.pageTitle}</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/latest-news/">News</Nav.Link>
        <Nav.Link href="/results/">Results</Nav.Link>
        <Nav.Link href="/clubs/">Clubs</Nav.Link>
        <NavDropdown title="About" id="basic-nav-dropdown">
          <NavDropdown.Item href="/contact/">Contact</NavDropdown.Item>
          <NavDropdown.Item href="/what-is-rugby-league/">Rugby League</NavDropdown.Item>
          <NavDropdown.Item href="/merchandise/">Kit</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <SocialMediaLinks />
    </Navbar.Collapse>
  </Navbar>
)
