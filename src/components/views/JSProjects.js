import javascript_icon from '../../icons/javascript_logo.png';
import { js_logo_alt_text } from './text_variables';
import { Fragment } from 'react';

const JSProjects = () => {
  return (
    <Fragment>
      <p>Javascript Projects Page</p>
      <img src={javascript_icon} alt={js_logo_alt_text} />
    </Fragment>
  );
};

export default JSProjects;
