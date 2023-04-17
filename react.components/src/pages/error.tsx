import Header from 'components/Header';
import Error from 'components/Error';

const ErrorPage = () => {
  return (
    <>
      <Header title="404 page" />
      <main className="container">
        <Error />
      </main>
    </>
  );
};

export default ErrorPage;
