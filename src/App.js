import React from 'react';
import classes from './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Layout from './components/Layout/Layout';

const App = () => {
    return (
        <div className={classes.App}>
            <Provider store={store}>
                <Layout />
            </Provider>
        </div>
    );
};

export default App;
