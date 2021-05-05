import SkillDisplay from '../components/SkillDisplay';
import Navbar from '../components/Navbar';

const ReactProjects = () => {
  return (
    <>
      <Navbar />
      <div className="content_container">
        <h1 id="page_title_text">React Projects</h1>
      </div>
      <SkillDisplay
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

export default ReactProjects;
