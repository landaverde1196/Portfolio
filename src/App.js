import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import HomePage from "./container/HomePage/HomePage";
import PortfolioPage from "./container/PortfolioPage/PortfolioPage";
import AboutPage from "./container/AboutPage/AboutPage";
import ContactPage from "./container/ContactPage/ContactPage";

const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
