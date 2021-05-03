import React, { Fragment, useState } from 'react';
import javascript_icon from '../../icons/javascript_logo.png';
import {
  javascript_projects_title_text,
  js_logo_alt_text
} from './text_variables';
import { programming_language_icon } from '../styles/styling_variables';
import '../styles/projects.css';

// const symbol_list = [
//   '@',
//   '$',
//   '%',
//   '^',
//   '&',
//   '*',
//   '(',
//   ')',
//   '!',
//   '-',
//   '_',
//   '#'
// ];

const JSProjects = () => {
  return (
    <Fragment>
      <div className="project_title_section">
        <img
          className={programming_language_icon}
          src={javascript_icon}
          alt={js_logo_alt_text}
        />
        <p id="section_text">{javascript_projects_title_text}</p>
      </div>

      <div className="user_selections">
        <h1 id="section_title">Select your desired special characters:</h1>
      </div>
      <PasswordGenerator />
    </Fragment>
  );
};

const PasswordGenerator = () => {
  const [password, set_new_password] = useState('sT2$-dv!m-d%$^');

  function generate_password(e) {
    console.log(`e: ${e.target}`);
    generate_character_array();
    const password_length = 14;
    let temp_password = '';

    console.log(`generating new password...`);

    for (let i = 0; i < password_length; i++) {
      let new_char = Math.floor(Math.random() * 31) + 100;
      // console.log(`char: ${String.fromCharCode(new_char)} code: ${new_char}`);

      temp_password += String.fromCharCode(new_char);
    }

    set_new_password((x) => (x = temp_password));
  }

  return (
    <>
      <div className="special_characters">
        {/* first row */}
        <div className="checkboxes">
          <label className="container">
            @
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
          <label className="container">
            $
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
          <label className="container">
            %
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
          <label className="container">
            ^
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
        </div>

        {/* second row */}
        <div className="checkboxes">
          <label className="container">
            &
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
          <label className="container">
            *
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
          <label className="container">
            (
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
          <label className="container">
            )
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
        </div>

        {/* third row */}
        <div className="checkboxes">
          <label className="container">
            !
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
          <label className="container">
            -
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
          <label className="container">
            _
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
          <label className="container">
            #
            <input type="checkbox" />
            <span className="checkmark" onClick={generate_password} />
          </label>
        </div>
      </div>
      <div className="password_output">
        <p id="label_text">Generated Password:</p>
        <p id="password_display_box">{password}</p>
      </div>
    </>
  );
};

function generate_character_array() {
  let characters = [];
  let special_characters = [];
  let checkbox_selector = document.querySelectorAll('.container');

  checkbox_selector.forEach((e) => {
    let input = e.querySelector('input');
    let character = e.textContent;

    // console.log(`character: ${character} || checked?: ${input.checked}`);
    if (input.checked) {
      special_characters.push(character);
    }
  });

  // document
  //   .querySelectorAll('label')
  //   .forEach((x) => x.querySelector('.checkbox'));

  console.log(
    `chars selected: ${special_characters}, standard chars: ${characters}`
  );
}

export default JSProjects;
