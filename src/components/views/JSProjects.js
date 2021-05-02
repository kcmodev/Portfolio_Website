import React, { Fragment } from 'react';
import javascript_icon from '../../icons/javascript_logo.png';
import {
  javascript_projects_title_text,
  js_logo_alt_text
} from './text_variables';
import { programming_language_icon } from '../styles/styling_variables';
import '../styles/projects.css';

const symbol_list = [
  '@',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '!',
  '-',
  '_',
  '\\'
];

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
        <div className="special_characters">
          <div className="checkboxes">
            <GenerateSymbolCheckboxes value={1} />
          </div>
          <div className="checkboxes">
            <GenerateSymbolCheckboxes value={2} />
          </div>
          <div className="checkboxes">
            <GenerateSymbolCheckboxes value={3} />
          </div>
        </div>
      </div>

      <div className="password_output">
        <p id="label_text">Generated Password:</p>
        <p id="password_display_box">
          <ShowGeneratedPassword />
        </p>
      </div>
    </Fragment>
  );
};

function ShowGeneratedPassword() {
  console.log(`generating password...`);
  let selected_characters = get_selected_characters();
  let password_length = 12;
  let generated_password = 'password incoming';
  console.log(`selected chars: ${selected_characters}`);

  if (selected_characters) {
    for (let i = 0; i < password_length; i++) {
      let newchar = (Math.floor(Math.random() * 137) + 100).toString();
      // console.log(`newchar: ${typeof newchar}`);
      generated_password.concat(newchar);
    }
  } else {
    return 'Still need a password';
  }

  console.log(`generated password = ${generated_password}`);
  return generated_password;
}

function get_selected_characters() {
  return document.querySelectorAll('.checkboxes label');
}

function GenerateSymbolCheckboxes(prop) {
  let symbols = [];

  if (prop.value === 1) {
    symbols = symbol_list.slice(0, 4);
  } else if (prop.value === 2) {
    symbols = symbol_list.slice(4, 8);
  } else if (prop.value === 3) {
    symbols = symbol_list.slice(8, 12);
  }

  return symbols.map((symbol) => (
    <label className="container" key={symbols.indexOf(symbol)}>
      {symbol}
      <input type="checkbox" />
      <span className="checkmark" />
    </label>
  ));
}

let checkboxes = document.querySelectorAll('.checkbox');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', () => {
    ShowGeneratedPassword();
  });
}

export default JSProjects;
