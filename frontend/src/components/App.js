import React, { useState } from 'react';
import Browser from '../components/Browser';
import DetailView from '../components/DetailView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [state, setState] = useState({colorPalette: [], filters: {}});

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Browser state={state} setState={setState}/>
        </Route>
        <Route path="/detail/:id" exact>
          <DetailView state={state} setState={setState}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
