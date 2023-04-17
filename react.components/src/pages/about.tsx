import Header from 'components/Header';
import About from 'components/About';

const AboutPage = () => {
  return (
    <>
      <Header title="about page" />
      <main className="container">
        <About />
      </main>
    </>
  );
};

export default AboutPage;
