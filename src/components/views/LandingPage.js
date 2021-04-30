import { Link } from 'react-router-dom';

import profile_picture from '../../images/profile_picture.jpg';
import python_icon from '../../icons/python_logo.png';
import javascript_icon from '../../icons/javascript_logo.png';
import java_icon from '../../icons/java_logo.png';
import react_icon from '../../icons/react_logo.svg';

import {
  java_projects_route,
  javascript_projects_route,
  python_projects_route,
  react_projects_route
} from '../routes/route_names';

import {
  java_logo_alt_text,
  js_logo_alt_text,
  python_logo_alt_text,
  react_logo_alt_text,
  intro_paragraph_text,
  profile_picture_alt_text
} from './text_variables';

import { programming_language_icon } from '../styles/styling_variables';

const LandingPage = () => {
  return (
    <div className="landing_page">
      <ProfilePicture />
      <div className="section_containers">
        <div className="intro_container">
          <p id="introduction">{intro_paragraph_text}</p>
        </div>

        <div className="skills_container">
          <div className="python_container">
            <Link to={python_projects_route}>
              <img
                className={programming_language_icon}
                src={python_icon}
                alt={python_logo_alt_text}
              />
            </Link>
          </div>
          <div className="javascript_container">
            <Link to={javascript_projects_route}>
              <img
                className={programming_language_icon}
                src={javascript_icon}
                alt={js_logo_alt_text}
              />
            </Link>
          </div>
          <div className="java_container">
            <Link to={java_projects_route}>
              <img
                className={programming_language_icon}
                src={java_icon}
                alt={java_logo_alt_text}
              />
            </Link>
          </div>
          <div className="react_container">
            <Link to={react_projects_route}>
              <img
                className={programming_language_icon}
                src={react_icon}
                alt={react_logo_alt_text}
              />
            </Link>
          </div>
        </div>
      </div>
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
