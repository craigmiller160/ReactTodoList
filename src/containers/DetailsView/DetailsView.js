import React, { Component } from 'react';
import TodoDetails from '../../components/TodoDetails/TodoDetails';
import TitleButtonPanel from '../../components/shared/TitleButtonPanel/TitleButtonPanel';
import Button from '../../components/shared/Button/Button';
import classes from './DetailsView.css';
import { connect } from 'react-redux';
import * as detailsActions from '../../store/actions/details.actions';
import * as todoListActions from '../../store/actions/todo-list.actions';
import Todo from '../../model/Todo';

class DetailsView extends Component {

    constructor() {
        super();
        this.updateTodo = this.updateTodo.bind(this);
        this.updateTodoTitle = this.updateTodoTitle.bind(this);
        this.updateTodoDescription = this.updateTodoDescription.bind(this);
    }

    render() {
        return (
            <div className={classes.DetailsView}>
                <TitleButtonPanel title="Todo Details">
                    <Button label="Delete Todo" />
                </TitleButtonPanel>
                <TodoDetails selected={this.props.selected}
                             updateTitle={this.updateTodoTitle}
                             updateDescription={this.updateTodoDescription} />
            </div>
        );
    }

    updateTodoDescription(description) {
        this.updateTodo(new Todo(this.props.selected.title, description));
    }

    updateTodoTitle(title) {
        this.updateTodo(new Todo(title, this.props.selected.description));
    }

    updateTodo(todo) {
        this.props.onUpdateTodoDetails(todo);
        this.props.onUpdateTodoList(todo, this.props.index);
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
        onUpdateTodoDetails: todo => dispatch(detailsActions.updateTodoDetails(todo)),
        onUpdateTodoList: (todo, index) => dispatch(todoListActions.updateTodoList(todo, index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);