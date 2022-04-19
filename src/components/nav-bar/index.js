import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function NavBar() {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <div
        className="layout-row justify-content-around align-items-center mt-20 links"
        data-testid="navigation-tabs"
      >
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/category1">Category1</Link>
        </a>
        <a>
          <Link to="/category2">Category2</Link>
        </a>
        <a>
          <Link to="/category3">Category3</Link>
        </a>
      </div>
    </div>
  );
}
