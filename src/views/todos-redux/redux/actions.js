import axios from "axios";

const HOST = 'http://localhost:8000';

export const AddOne = () => ({ type: 'AddOne' });
export const MultiThree = () => ({ type: 'MultiThree' });
export const GetTodos = (payload) => ({ type: 'GetTodos', payload });
export const AddTodo = (payload) => ({ type: 'AddTodo', payload });
export const DeleteTodo = (payload) => ({ type: 'DeleteTodo', payload });

export function getTodos() {
  return (dispatch) => {
    axios.get(`${HOST}/items`)
      .then(function (res) {
        dispatch(GetTodos(res.data));
      });
  }
}

export function addTodo(newItem) {
  return dispatch => {
    axios
    .post(`${HOST}/items`, { todoItem: newItem })
    .then((res) => {
      dispatch(GetTodos(res.data));
    })
  }
}

export function deleteTodo(id) {
  return dispatch => {
    axios
    .delete(`${HOST}/items`, { data: { id } })
    .then((res) => {
      dispatch(GetTodos(res.data));
    })
  }
}
