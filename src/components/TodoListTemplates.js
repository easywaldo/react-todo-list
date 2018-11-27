import React from 'react';
import './TodoListTemplates.css';

const TodoListTemplates = ({form, children}) => {
    return (
        <main className="todo-list-templates">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplates;