import React, { Component } from 'react';
import classes from './App.css';
import Title from './components/Title/Title';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <div className="row">
                    <div className="col">
                        <Title />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Hello</p>
                    </div>
                    <div className="col">
                        <p>World</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
