import Header from 'components/Header';
import Create from 'components/Create';

const CreatePage = () => {
  return (
    <>
      <Header title="create page" />
      <main className="container">
        <Create />
      </main>
    </>
  );
};

export default CreatePage;
