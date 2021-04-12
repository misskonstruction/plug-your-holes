import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const WoodenPlugsPage = () => (
  <div>
    <h1>Wooden Plugs Page</h1>
  </div>
  )

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path = '/woodenPlugs' component={WoodenPlugsPage} />
      </Switch>
    </div>
  );
}

export default App;
