import { createBrowserRouter } from "react-router-dom";

import Home from "../views/home/Home";
import Books from '../views/books/List'

import Todos from '../views/todos';
import StoreApp from '../views/stores/App';
import TodosRedux from '../views/todos-redux/index'
import TodosRTK from '../views/todos-rtk/App'
import TodosMobx from '../views/todos-mobx/index'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: '<div>home</div>'
  },
  {
    path: '/books',
    element: <Books />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
  {
    path: '/store-app',
    element: <StoreApp />,
  },
  {
    path: '/todos-redux',
    element: <TodosRedux />,
  },
  {
    path: '/todos-rtk',
    element: <TodosRTK />,
  },
  {
    path: '/todos-mobx',
    element: <TodosMobx />,
  },
  
]);
