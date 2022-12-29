import React from 'react';
import { observe } from 'mobx';
import { inject } from 'mobx-react';

import TodoForm from './Form';
import TodoList from './List';

// @inject('store')
// @observe
export default function App() {

  // this.props.store.getTodos();

  return (
    <div>
      <TodoForm
        addTodoItem={this.addTodoItem}
      />
      <TodoList
        todoItems={[]}
        deleteTodoItem={() => {}}
      />
    </div>
  );
} 
