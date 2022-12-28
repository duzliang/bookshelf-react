export default function reducer(state, action) {
  if (!state) {
    state = {
      count: 1,
      todos: [],
    }
  }

  switch (action.type) {
    case 'AddOne':
      state.count += 1;
      break;
    case 'MultiThree':
      state.count *= 3;
      break;
    case 'GetTodos': {
      console.log('reducer todos:', action.payload)
      state.todos = action.payload.data || [];
      break;
    }
    default:
      break;
  }

  return { ...state };
}