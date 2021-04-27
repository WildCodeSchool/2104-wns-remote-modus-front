import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AskingHelpForm from "./routes/AskingHelpForm/AskingHelpForm";
import Home from "./routes/Home/Home";
import Navbar from "./routes/Navbar/Navbar";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ask-help">
          <AskingHelpForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
