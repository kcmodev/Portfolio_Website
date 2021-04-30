import java_icon from '../../icons/java_logo.png';
import { java_logo_alt_text } from './text_variables';
import { Fragment } from 'react';
import { programming_language_icon } from '../styles/styling_variables';

const JavaProjects = () => {
  return (
    <Fragment>
      <p>Java Projects Page</p>
      <img
        className={programming_language_icon}
        src={java_icon}
        alt={java_logo_alt_text}
      />
    </Fragment>
  );
};

export default JavaProjects;
