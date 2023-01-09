import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './views/error';

import App from './views/App';
import Login from './views/login/Index';
import Register from './views/login/Register';

import Books from './views/books/List';
import BookDetail from './views/books/Detail';

import Todos from './views/todos';
import StoreApp from './views/couter/App';
import TodosRedux from './views/todos-redux';
import TodosRTK from './views/todos-rtk/App';
import TodosMobx from './views/todos-mobx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/book/list',
        element: <Books />,
      },
      {
        path: '/book/:id',
        element: <BookDetail />,
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
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/home',
    element: '<div>home</div>',
  },
]);

export default router;
