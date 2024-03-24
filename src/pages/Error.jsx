import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

    // Extract relevant error information
    const { status, statusText, data } = error;

    const errorMessage = data;
    // Prepare error message
    const errorStatus = `${status}: ${statusText}`;

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Oops!</h1>
      <p className="lead">Sorry, an unexpected error has occurred.</p>
      <p className="text-danger">
        <i> <span className="text-danger">{errorStatus}</span></i><br />
        <i> <span className="text-warning">{errorMessage}</span></i>
      </p>
    </div>
  );
}
