import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Books from '../views/books/List'

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
  
]);
