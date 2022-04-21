import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h2>D|MOVIE</h2>
      </div>
      <div className="header__menu">
        <ul>
          <li>HOME</li>
          <li>PAGES</li>
          <li>PORTFOLIO</li>
          <li>BLOG</li>
          <li>MOVIES</li>
        </ul>
      </div>
      <div className="header__others">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
