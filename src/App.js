import profile_picture from './profile_picture.jpg'
import {intro_paragraph_text} from './text_variables'
import './App.css';

function App() {
  return (
    <div className="landing_page">
        <div className="profile_picture_container">
            <img className="profile_picture" src={ profile_picture } alt="profile of the website author"/>
        </div>
        <div className="text_containers">
            <div className="intro_container">
                <p id="introduction">{intro_paragraph_text}</p>
            </div>

            <div className="skills_container">
                <p id="skills">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="social_container">
                <p id="social">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
  );
}

export default App;
