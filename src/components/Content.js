import React from "react";

import MainPage from './MainPage'
import CountriesDetails from "./CountriesDetails";
import { Route, Switch } from 'react-router-dom'

const Content = () => {
  return (
    <>

      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/:id' component={CountriesDetails} />
      </Switch>


    </>
  );
};

export default Content;
