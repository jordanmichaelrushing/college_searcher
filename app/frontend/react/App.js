import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Colleges from "./views/colleges";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" exact component={Colleges} />
          <Route path="/colleges" exact component={Colleges} />
        </Switch>
      </Router>
    </>
  )
}
export default App;