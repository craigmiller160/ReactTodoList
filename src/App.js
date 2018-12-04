import React, { Component } from 'react';
import classes from './App.css';
import Button from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>This is the App</h1>
          <Button label="My Button" />
      </div>
    );
  }
}

export default App;
