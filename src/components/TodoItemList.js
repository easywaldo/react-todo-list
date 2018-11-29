import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="리액트 스터디"/>
                <TodoItem text="ES 스터디" />
                <TodoItem text="Event Sourcing 스터디" />
            </div>
        );
    }
}

export default TodoItemList;