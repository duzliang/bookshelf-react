import React from 'react';
import { useRouteError } from "react-router-dom";

type ServerError = {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error: ServerError = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
