import TextLineThrough from "components/TextLineThrough/index";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h2>D</h2>
      </div>
      <div className="header__menu">
        <ul>
          <li>
            <TextLineThrough color="white">HOME</TextLineThrough>
          </li>
          <li>
            <TextLineThrough color="white">PAGES</TextLineThrough>
          </li>
          <li>
            <TextLineThrough color="white">PORTFOLIO</TextLineThrough>
          </li>
          <li>
            <TextLineThrough color="white">BLOG</TextLineThrough>
          </li>
          <li>
            <Link to="/movies">
              <TextLineThrough color="white">MOVIES</TextLineThrough>
            </Link>
          </li>
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
