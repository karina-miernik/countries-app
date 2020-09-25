import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Content />
      </Router>
    </>
  );
}

export default App;
