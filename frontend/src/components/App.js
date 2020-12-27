import React, { useState } from 'react';
import Browser from '../components/Browser';
import DetailView from '../components/DetailView';
import About from '../components/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [state, setState] = useState({colorPalette: [], filters: {}});
  
  function randomColor(){
    return "#"+((1<<24)*Math.random()|0).toString(16);
  }

  // first time visit
  if (! localStorage.noFirstVisit) {
    setState(state => ({ ...state, colorPalette: [randomColor()]}));
    localStorage.noFirstVisit = "1";
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Browser state={state} setState={setState}/>
        </Route>
        <Route path="/detail/:id" render={(props) => (
          <DetailView key={props.match.params.id} state={state} setState={setState} />)
        } />
        <Route path="/about" exact>
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
