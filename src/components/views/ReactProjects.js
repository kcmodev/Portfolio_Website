import react_icon from '../../icons/react_logo.svg';
import { react_logo_alt_text } from './text_variables';
import { Fragment } from 'react';
import { programming_language_icon } from '../styles/styling_variables';

const ReactProjects = () => {
  return (
    <Fragment>
      <p>React Projects Page</p>
      <img
        className={programming_language_icon}
        src={react_icon}
        alt={react_logo_alt_text}
      />
    </Fragment>
  );
};

export default ReactProjects;
