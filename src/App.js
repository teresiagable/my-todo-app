import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Todolist from './components/Todolist';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/users' render={() => <h1> Users </h1>} />
            <Route exact path='/todolist'>
              <Todolist />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
