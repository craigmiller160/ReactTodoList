import React, { Component } from 'react';
import TodoDetails from '../../components/TodoDetails/TodoDetails';
import TitleButtonPanel from '../../components/shared/TitleButtonPanel/TitleButtonPanel';
import Button from '../../components/shared/Button/Button';
import classes from './DetailsView.css';
import { connect } from 'react-redux';
import * as detailsActions from '../../store/actions/details.actions';
import * as todoListActions from '../../store/actions/todo-list.actions';

class DetailsView extends Component {

    constructor() {
        super();
        this.updateTodo = this.updateTodo.bind(this);
    }

    render() {
        return (
            <div className={classes.DetailsView}>
                <TitleButtonPanel title="Todo Details">
                    <Button label="Delete Todo" />
                </TitleButtonPanel>
                <TodoDetails selected={this.props.selected} />
            </div>
        );
    }

    updateTodo() {
        //TODO need to properly update the TODO in both places
    }

}

const mapStateToProps = state => {
    return {
        selected: state.details.selected,
        index: state.details.index
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTodoDetails: () => dispatch(detailsActions.updateTodoDetails(null)),
        onUpdateTodoList: () => dispatch(todoListActions.updateTodoList(null))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);