import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './views/error';

import App from './views/App';
import Login from './views/login/Index';
import Register from './views/login/Register';

import Books from './views/books/List';
import BookDetail from './views/books/Detail';

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
