import SkillDisplay from '../components/SkillDisplay';
import Navbar from '../components/Navbar';

const JavaProjects = () => {
  return (
    <>
      <Navbar />
      <div className="content_container">
        <h1 id="page_title_text">Machine Learning Application</h1>
      </div>
      <SkillDisplay props={{ java: true, description: true }} />
    </>
  );
};

export default JavaProjects;
