import SkillDisplay from '../components/SkillDisplay';

const PythonProjects = () => {
  return (
    <>
      <div className="content_container">
        <h1 id="page_title_text">Machine Learning Application</h1>
      </div>
      <SkillDisplay
        props={{ python: true, html: true, css: true, description: true }}
      />
    </>
  );
};

export default PythonProjects;
