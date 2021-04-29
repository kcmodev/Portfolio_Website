import { Link } from 'react-router-dom';

import profile_picture from '../../profile_picture.jpg';
import { intro_paragraph_text } from './text_variables';
import {
  java_projects_route,
  javascript_projects_route,
  python_projects_route,
  react_projects_route
} from '../routes/route_names';
import python_icon from '../../icons/python_logo.png';
import javascript_icon from '../../icons/javascript_logo.png';
import java_icon from '../../icons/java_logo.png';
import react_icon from '../../icons/react_logo.svg';

const LandingPage = () => {
  return (
    <div className="landing_page">
      <div className="profile_picture_container">
        <img
          className="profile_picture"
          src={profile_picture}
          alt="profile of the website author"
        />
      </div>
      <div className="section_containers">
        <div className="intro_container">
          <p id="introduction">{intro_paragraph_text}</p>
        </div>

        <div className="skills_container">
          <div className="python_container">
            <Link to={python_projects_route}>
              <img
                className="python_icon"
                src={python_icon}
                alt="python programming language logo"
              />
            </Link>
          </div>
          <div className="javascript_container">
            <Link to={javascript_projects_route}>
              <img
                className="javascript_icon"
                src={javascript_icon}
                alt="javascript programming language logo"
              />
            </Link>
          </div>
          <div className="java_container">
            <Link to={java_projects_route}>
              <img
                className="java_icon"
                src={java_icon}
                alt="java programming language logo"
              />
            </Link>
          </div>
          <div className="react_container">
            <Link to={react_projects_route}>
              <img
                className="react_icon"
                src={react_icon}
                alt="react framework logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
