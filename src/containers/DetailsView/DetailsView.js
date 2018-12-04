import React, { Component } from 'react';
import TodoDetails from '../../components/TodoDetails/TodoDetails';
import ButtonPanel from '../../components/shared/ButtonPanel/ButtonPanel';

class DetailsView extends Component {

    render() {
        return (
            <div>
                <TodoDetails />
                <ButtonPanel />
            </div>
        );
    }

}

export default DetailsView;