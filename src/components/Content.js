import React from "react";

import MainPage from "./MainPage";
import CountriesDetails from "./CountriesDetails";
import { Route, Switch } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Switch>
        <Route exact path="/countries-app" component={MainPage} />
        <Route path="/countries-app/:id" component={CountriesDetails} />
      </Switch>
    </>
  );
};

export default Content;
