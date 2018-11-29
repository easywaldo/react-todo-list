import React, { Component } from 'react';
import TodoListTemplates from './components/TodoListTemplates';
import Form from './components/form';
import './index.css';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;
  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' ES 소개', checked: true },
      { id: 2, text: ' Event Sourcing 소개', checked: false }
    ]
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
    <TodoListTemplates form={(
      <Form
      value={input}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      onCreate={handleCreate}
      />
    )}>
        <TodoItemList todos={todos}/>
    </TodoListTemplates>
    );
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = (e) => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  };

}

export default App;