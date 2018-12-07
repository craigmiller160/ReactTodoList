import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Provider from 'react-redux/es/components/Provider';

describe('App component', () => {
    let mountedApp;

    const store = {

    };

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
        // const div = document.createElement('div');
        // ReactDOM.render(<App />, div);
        // ReactDOM.unmountComponentAtNode(div);

        app()
    });
});