import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BookCategory from './BookCategories/container';
import Books from './Books/container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/">
            <BookCategory />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
