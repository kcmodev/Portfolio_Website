import java_icon from '../../icons/java_logo.png';
import { java_logo_alt_text } from './text_variables';
import { Fragment } from 'react';

const JavaProjects = () => {
  return (
    <Fragment>
      <p>Java Projects Page</p>
      <img src={java_icon} alt={java_logo_alt_text} />
    </Fragment>
  );
};

export default JavaProjects;
