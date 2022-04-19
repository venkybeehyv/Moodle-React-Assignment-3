import React from "react";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import { Route, Switch } from "react-router-dom";
import CategoryBar from "./CategoryBar";

function Category2() {
  return (
    <div>
      <CategoryBar />
      <Switch>
        <Route path="/category2/product1" component={Product1} />
        <Route path="/category2/product2" component={Product2} />
        <Route path="/category2/product3" component={Product3} />
      </Switch>
    </div>
  );
}

export default Category2;
