import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TodoMain from './components/TodoMain';
import TodoItemForm from './components/TodoItemForm';
import StarWarMain from './components/starwars/StarWarMain';
import NotFound from './components/NotFound';
import './App.css';
import ContextDemo from './components/demos/ContextDemo';
import DisplayContext from './context/DisplayContext';
import DemouseMemo from './components/demos/DemouseMemo';
import DemouseCallback from './components/demos/DemouseCallback';
import ErrorBoundary from './components/ErrorBoundary';
import StateDemo from './components/demos/state/StateDemo';

function App() {
  return (
    <DisplayContext.Provider
      value={{
        leastimportantcolumn: '99',
        lightStyle: 'bg-light',
        darkStyle: 'bg-info',
        colorStyle: 'warning',
      }}
    >
      <div className='App'>
        <header className='App-header'>
          <Router>
            <Navbar />

            <Switch>
              <Route exact path='/home'>
                <Home />
              </Route>
              <Route exact path='/users' render={() => <h1> Users </h1>} />
              <Route exact path='/todomain'>
                <ErrorBoundary>
                  <TodoMain />
                </ErrorBoundary>
              </Route>
              <Route exact path='/todoitemform/:id'>
                <ErrorBoundary>
                  <TodoItemForm />
                </ErrorBoundary>
              </Route>
              <Route exact path='/charactermain'>
                <StarWarMain />
              </Route>
              <Route exact path='/contextdemo'>
                <ContextDemo />
              </Route>
              <Route exact path='/statedemo'>
                <StateDemo />
              </Route>
              <Route exact path='/usememo'>
                <DemouseMemo />
              </Route>
              <Route exact path='/usecallback'>
                <DemouseCallback />
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='*' component={NotFound} />
            </Switch>
          </Router>
        </header>
      </div>
    </DisplayContext.Provider>
  );
}

export default App;
