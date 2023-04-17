import Header from 'components/Header';
import Main from 'components/Main';

import './../styles/app.scss';

const MainPage = () => {
  return (
    <>
      <Header title="main page" />
      <main className="container">
        <Main />
      </main>
    </>
  );
};

export default MainPage;
