import React from "react";
import { Navbar } from "react-bootstrap";

export default function NewsNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center">
      <Navbar.Brand
        href="/"
        style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem", letterSpacing: "2px"}}
      >
        News for All
      </Navbar.Brand>
    </Navbar>
  );
}
