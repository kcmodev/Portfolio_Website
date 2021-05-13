import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';

const java_project_description_1 =
  'This program is an appointment management application to be used by a sales team to manage the location and ' +
  'time of upcoming appointments. The primary language used in development is Java with Scenebuilder used for ' +
  'designing the front end. It is a standalone desktop application that also uses MySQL in the backend for data persistence.';

const JavaPage = () => {
  document.title = 'Java';
  return (
    <>
      <Navbar />
      <section className={'container text-center'}>
        <p id="page_title_text">Appointment Management Application</p>
      </section>

      {/*<div className="content_container">*/}
      {/*  <p id="section_text">{java_project_description_1}</p>*/}
      {/*</div>*/}

      <SkillAvatars props={{ java: true, description: true }} />
    </>
  );
};

export default JavaPage;
