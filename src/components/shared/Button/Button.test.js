import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
    const BUTTON_LABEL = 'ButtonLabel';
    const BACKGROUND_COLOR = 'blue';
    const COLOR = 'red';
    const BORDER_COLOR = 'gray';

    let props;
    let mountedButton;
    const button = () => {
        if (!mountedButton) {
            mountedButton = mount(
                <Button {...props} />
            );
        }

        return mountedButton;
    };

    beforeEach(() => {
        props = {
            label: BUTTON_LABEL,
            backgroundColor: BACKGROUND_COLOR,
            color: COLOR,
            borderColor: BORDER_COLOR
        };

        //TODO missing the click prop

        mountedButton = undefined;
    });

    it('renders a button', () => {
        const buttons = button().find('button');
        expect(buttons.length).toEqual(1);
    });

});