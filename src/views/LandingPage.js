import SkillDisplay from '../components/SkillDisplay';
import ProfilePicture from '../components/ProfilePicture';

import { intro_paragraph_text } from './text_variables';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <>
      <Navbar props={{ on_landing_page: true }} />
      <div className="landing_page">
        <ProfilePicture />
        <div className="section_containers">
          <div className="intro_container">
            <p id="section_text">{intro_paragraph_text}</p>
          </div>
        </div>
        <SkillDisplay
          props={{ python: true, javascript: true, java: true, react: true }}
        />
      </div>
    </>
  );
};

export default LandingPage;
