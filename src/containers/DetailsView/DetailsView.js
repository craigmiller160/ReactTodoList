import React, { Component } from 'react';
import TodoDetails from '../../components/TodoDetails/TodoDetails';
import TitleButtonPanel from '../../components/shared/TitleButtonPanel/TitleButtonPanel';

class DetailsView extends Component {

    render() {
        return (
            <div>
                <TitleButtonPanel title="Todo Details" />
                <TodoDetails />
            </div>
        );
    }

}

export default DetailsView;