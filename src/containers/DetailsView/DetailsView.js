import React, { Component } from 'react';
import TodoDetails from '../../components/TodoDetails/TodoDetails';
import TitleButtonPanel from '../../components/shared/TitleButtonPanel/TitleButtonPanel';
import Button from '../../components/shared/Button/Button';
import classes from './DetailsView.css';

class DetailsView extends Component {

    render() {
        return (
            <div className={classes.DetailsView}>
                <TitleButtonPanel title="Todo Details">
                    <Button label="Delete Todo" />
                </TitleButtonPanel>
                <TodoDetails />
            </div>
        );
    }

}

export default DetailsView;