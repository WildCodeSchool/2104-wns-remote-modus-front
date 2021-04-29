import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AskingHelpForm from "./routes/askinghelpform/AskingHelpForm";
import Home from "./routes/home/Home";
import Navbar from "./routes/navbar/Navbar";
import PostsList from "./routes/postslist/PostsList";

const App = (): JSX.Element => {
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
        <Route exact path="/posts-list">
          <PostsList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
