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
          <Link to="/category2/product1">Product1</Link>
        </a>
        <a>
          <Link to="/category2/product2">Product2</Link>
        </a>
        <a>
          <Link to="/category2/product3">Product3</Link>
        </a>
      </div>
    </div>
  );
}
