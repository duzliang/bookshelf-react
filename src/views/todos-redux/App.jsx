import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoForm from './Form';
import TodoList from './List';

import {
  AddOne,
  MultiThree,
  getTodos,
  addTodo,
  deleteTodo,
} from './redux/actions';

class App extends React.Component {
  componentDidMount() {
    this.props.actions.getTodos();
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.props.count}个</h1>
        <button onClick={() => this.props.actions.AddOne()}>加1</button>
        <button onClick={() => this.props.actions.MultiThree()}>乘3</button>

        <h2>Todos:</h2>
        <TodoForm
          add={newItem => this.props.actions.addTodo(newItem)}
        />
        <TodoList
          todoItems={this.props.todos}
          delete={id => this.props.actions.deleteTodo(id)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.todos.count,
    todos: state.todos.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      AddOne,
      MultiThree,
      getTodos,
      addTodo,
      deleteTodo,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
