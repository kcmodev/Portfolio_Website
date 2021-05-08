import SkillDisplay from '../components/SkillDisplay';
import Navbar from '../components/Navbar';

import login_screen from '../images/ml_app_login_screen.png';
import vitals_screen from '../images/ml_app_vitals_screen.png';
import results_screen from '../images/ml_app_results_screen.png';
import Copyright from '../components/Copyright';

const ml_app_location = 'https://cvd-detection-wgu.herokuapp.com';
const ml_app_source_location =
  'https://github.com/kcmodev/cvd_detection_ml_app_206';

const description_text_1 =
  'This is a machine learning program developed as part of my computer science ' +
  'curriculum. It uses Python and Sci-Kit to train and use a Random Forest Classifier machine learning model ' +
  "to predict the user's risk of developing cardiovascular disease.";

const description_text_2 =
  'Flask is used for the backend to handle routing and user authentication. The front end uses ' +
  'HTML and CSS for styling and layout. Additionally, Postgres is used to handle storing user credentials for login ' +
  'with every password being hashed to reduce the likelihood of being intercepted during authentication. This process ' +
  'also prevents users from accessing unauthorized areas of the program.';

const description_text_3 =
  'Upon navigating to the page you are met with a login screen. This page uses the flask_login library and ' +
  'Postgres to verify the correct credentials were entered for the user to gain access to the remaining portions of ' +
  'the application. ';

const description_text_4 =
  'Next the user is met with a screen to enter their latest set of lab values as well as a ' +
  'brief questionnaire to asses their risk based on lifestyle choices.';

const description_text_5 =
  'Upon completion of those steps the user is redirected to a results screen where they ' +
  'can view their risk approximation determined the the machine learning algorithm.';

const PythonPage = () => {
  document.title = 'Python';
  return (
    <>
      <Navbar />
      <div className={'content_container mobile_flex_wrap'}>
        <p id={'page_title_text'}>Machine Learning Application</p>
      </div>
      <div className={'content_container mobile_flex_wrap'}>
        <p id={'section_text'}>{description_text_1}</p>
      </div>
      <div className={'content_container mobile_flex_wrap'}>
        <p id={'section_text'}>{description_text_2}</p>
      </div>

      <div className={'content_container mobile_flex_wrap'}>
        <p id={'section_text'}>
          The repository containing the source code for this project can be
          found{' '}
          <a href={ml_app_source_location} target={'_blank'} rel={'noreferrer'}>
            {' '}
            here
          </a>
          .
        </p>
      </div>

      <div className={'content_container mobile_flex_wrap'}>
        <p id={'section_text'}>{description_text_3}</p>
        <img src={login_screen} id={'ml_login_img'} alt={'login screen'} />
      </div>

      <div className={'content_container mobile_flex_wrap'}>
        <p id={'section_text'}>{description_text_4}</p>
        <img
          src={vitals_screen}
          id={'ml_vitals_img'}
          alt={'vital sign entry screen'}
        />
      </div>

      <div className={'content_container mobile_flex_wrap'}>
        <p id={'section_text'}>{description_text_5}</p>
        <img
          src={results_screen}
          id={'results_screen_img'}
          alt={'results display screen'}
        />
      </div>

      <div className={'content_container mobile_flex_wrap'}>
        <p id={'section_text'}>
          You can interact with the live production app on
          <a href={ml_app_location} target={'_blank'} rel={'noreferrer'}>
            {' '}
            Heroku
          </a>
          . You will need the default credentials of username "admin" and
          password "admin" to log in and access all areas of the application.
        </p>
      </div>

      <div className={'content_container mobile_flex_wrap'}>
        <SkillDisplay
          props={{
            python: true,
            html: true,
            css: true,
            description: true
          }}
        />
      </div>
      <Copyright />
    </>
  );
};

export default PythonPage;
