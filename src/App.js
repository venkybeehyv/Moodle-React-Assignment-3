import React from "react";
import { Switch, Route } from "react-router-dom";

import Category1 from "./components/Category1";
import Category2 from "./components/Category2";
import Category3 from "./components/Category3";
import NavBar from "./components/nav-bar";
import Home from "./components/Home";
import "./App.css";

const title = "Navigation Bar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category1" component={Category1} />
        <Route path="/category2" component={Category2} />
        <Route path="/category3" component={Category3} />
      </Switch>
    </div>
  );
}

export default App;
