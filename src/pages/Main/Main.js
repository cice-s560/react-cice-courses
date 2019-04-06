import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import Home from "../Home";
import Catalog from "../Catalog";
import MyCourses from "../MyCourses";
import NotFound from "../NotFound";

const Main = () => (
  <React.Fragment>
    <AppHeader />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/my-courses" component={MyCourses} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default Main;
