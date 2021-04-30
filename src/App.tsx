import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/Home";
import Navbar from "./components/navbar/Navbar";
import AskingHelpPosts from "./routes/askingHelpPosts/AskingHelpPosts";
import AskingHelpForm from "./routes/askinghelpform/AskingHelpForm";

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/asking-help-form">
          <AskingHelpForm />
        </Route>
        <Route exact path="/asking-help-index">
          <AskingHelpPosts />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
