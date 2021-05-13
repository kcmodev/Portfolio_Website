import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';

const ReactPage = () => {
  document.title = 'React';
  return (
    <>
      <Navbar />

      <section className="container text-center">
        <h1>React Projects</h1>
      </section>

      <SkillAvatars
        props={{
          javascript: true,
          react: true,
          html: true,
          css: true,
          description: true
        }}
      />
    </>
  );
};

export default ReactPage;
