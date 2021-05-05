import SkillDisplay from '../components/SkillDisplay';

const JavaProjects = () => {
  return (
    <>
      <div className="content_container">
        <h1 id="page_title_text">Machine Learning Application</h1>
      </div>
      <SkillDisplay props={{ java: true, description: true }} />
    </>
  );
};

export default JavaProjects;
