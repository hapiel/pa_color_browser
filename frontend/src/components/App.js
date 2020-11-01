import React from 'react';
import Browser from '../components/Browser';
import DetailView from '../components/DetailView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Browser}/>
        <Route path="/detail/:id" exact component={DetailView}/>
      </Switch>
    </Router>
  );
}

export default App;
