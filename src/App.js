import React, { Component } from 'react';
import TodoListTemplates from './components/TodoListTemplates';
import './index.css';

class App extends Component {
  render() {
    return (
      <TodoListTemplates>
        템플릿 완성
      </TodoListTemplates>
    );
  }
}

export default App;