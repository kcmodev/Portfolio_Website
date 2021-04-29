import python_icon from '../../icons/python_logo.png';
import { python_logo_alt_text } from './text_variables';
import { Fragment } from 'react';

const PythonProjects = () => {
  return (
    <Fragment>
      <p>Python Projects Page</p>
      <img src={python_icon} alt={python_logo_alt_text} />
    </Fragment>
  );
};

export default PythonProjects;
