import python_icon from '../icons/python_logo.png';
import { python_logo_alt_text } from './text_variables';
import { Fragment } from 'react';
import { programming_language_icon } from '../styles/styling_variables';

const PythonProjects = () => {
  return (
    <Fragment>
      <p>Python Projects Page</p>
      <img
        className={programming_language_icon}
        src={python_icon}
        alt={python_logo_alt_text}
      />
    </Fragment>
  );
};

export default PythonProjects;
