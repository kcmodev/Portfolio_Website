import react_icon from '../../icons/react_logo.svg';
import { react_logo_alt_text } from './text_variables';
import { Fragment } from 'react';

const ReactProjects = () => {
  return (
    <Fragment>
      <p>React Projects Page</p>
      <img src={react_icon} alt={react_logo_alt_text} />
    </Fragment>
  );
};

export default ReactProjects;
