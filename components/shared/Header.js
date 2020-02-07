// react libraries
import React from "react";

// other libraries
import Link from "next/link";

// styles
import "../shared/styles/header.scss";

// components
import SearchBar from "./SearchBar";

// links
const navLinkTitle = [
  { title: "Home", linkUrl: "/" },
  { title: "About", linkUrl: "/about" },
  { title: "Login", linkUrl: "/login" },
  { title: "Register", linkUrl: "/register" }
];

/**
 * @desc header
 */
const Header = () => (
  <header className="main-header">
    <div className="nav-bar-logo"></div>
    <SearchBar />
    <nav className="nav-link-wrapper">
      {navLinkTitle.map((link, index) => (
        <Link key={index} href={`${link.linkUrl}`}>
          <a className="link-text">{link.title}</a>
        </Link>
      ))}
    </nav>
  </header>
);

export default Header;
