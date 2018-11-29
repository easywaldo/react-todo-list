import React, { Component } from 'react';
import TodoListTemplates from './components/TodoListTemplates';
import Form from './components/form';
import './index.css';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  render() {
    return (
    <TodoListTemplates form={<Form/>}>
        <TodoItemList/>
    </TodoListTemplates>
    );
  }
}

export default App;