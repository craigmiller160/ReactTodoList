import React, { Component } from 'react';
import TodoList from '../../components/TodoList/TodoList';
import ButtonPanel from '../../components/shared/ButtonPanel/ButtonPanel';

class TodoListView extends Component {

    render() {
        return (
            <div>
                <TodoList />
                <ButtonPanel />
            </div>
        );
    }

}

export default TodoListView;