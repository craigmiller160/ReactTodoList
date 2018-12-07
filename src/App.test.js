import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

describe('App component', () => {
    let mountedApp;

    const app = () => {
        if (!mountedApp) {
            mountedApp = mount(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        }

        return mountedApp;
    };

    it('renders without crashing', () => {
        app();
    });
});