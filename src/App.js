import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/index";
import Shop from "./Shop/index";
import Checkout from "./Checkout/index";
import AllOrders from "./AllOrders/index";
import OrderThanks from "./OrderThanks/index";
import OrderTracking from "./OrderTracking/index";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/all-orders">
          <AllOrders />
        </Route>
        <Route path="/order-thanks">
          <OrderThanks />
        </Route>
        <Route path="/order-tracking">
          <OrderTracking />
        </Route>
      </Router>
    </div>
  );
}

export default App;
