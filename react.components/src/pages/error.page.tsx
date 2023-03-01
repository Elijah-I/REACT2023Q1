import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  let shownError = '';

  if (isRouteErrorResponse(error)) shownError = error.statusText;
  if (error instanceof Error) shownError = error.message;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{shownError}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
