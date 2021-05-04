import profile_picture from '../images/profile_picture.jpg';
import SkillDisplay from '../components/SkillDisplay';

import {
  intro_paragraph_text,
  profile_picture_alt_text
} from './text_variables';

const LandingPage = () => {
  return (
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
  );
};

export function ProfilePicture() {
  return (
    <div className="profile_picture_container">
      <img
        className="profile_picture"
        src={profile_picture}
        alt={profile_picture_alt_text}
      />
    </div>
  );
}

export default LandingPage;
