import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getList, addOne, multiThree } from './slice';

import TodoList from './List';
import TodoForm from './Form';

export default function App() {
  const count = useSelector((state) => state.todos.count);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  dispatch(getList());

  return (
    <div>
      <h1>Todos: {count}个</h1>
      <button onClick={() => dispatch(addOne())}>加1</button>
      <button onClick={() => dispatch(multiThree())}>乘3</button>

      <br/>

      <TodoForm
        addTodoItem={() => {}}
      />
      <TodoList
        todoItems={todos}
        deleteTodoItem={() => {}}
      />
    </div>
  );
}

// export default class App extends React.Component {
  // addTodoItem = (value) => {
  //   const newTodoItem = {
  //     id: this.state.todoItems.length,
  //     value,
  //     done: false,
  //     delete: false
  //   };

  //   axios
  //     .post(`${HOST}/items`, { todoItem: newTodoItem })
  //     .then((res) => {
  //       console.log('data:', res.data);
  //       this.setState({ todoItems: res.data })
  //     })
  // }

  // deleteTodoItem = (item) => {
  //   console.log('del', item);
  //   axios
  //     .delete(`${HOST}/items`, { data: { id: item.id } })
  //     .then((res) => {
  //       console.log('delete data:', res.data);
  //       this.setState({ todoItems: res.data })
  //     })
  // }
// }
