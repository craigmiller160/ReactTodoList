import React, { Component } from 'react';
import classes from './App.css';
import Title from './components/Title/Title';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Title />
            </div>
        );
    }
}

export default App;
