import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Books from '../views/books/List'

import Todos from '../views/todos';
import StoreApp from '../views/stores/App';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
  
]);
