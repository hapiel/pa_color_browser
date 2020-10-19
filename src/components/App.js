import React from 'react';
import Browser from '../components/Browser';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Browser}/>
      </Switch>
    </Router>
  );
}

export default App;
