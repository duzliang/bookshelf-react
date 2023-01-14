import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './views/error';

import App from './views/App';
import Login from './views/user/Login';
import Register from './views/user/Register';

import Users from './views/user/List';
import UserDetail from './views/user/Detail';

import Books from './views/books/List';
import BookDetail from './views/books/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <UserDetail />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/books/:id',
        element: <BookDetail />,
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
    path: '/',
    element: '<div>home</div>',
  },
]);

export default router;
