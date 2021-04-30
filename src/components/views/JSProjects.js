import React, { Fragment } from 'react';
import javascript_icon from '../../icons/javascript_logo.png';
import {
  javascript_projects_title_text,
  js_logo_alt_text
} from './text_variables';
import { programming_language_icon } from '../styles/styling_variables';
import '../styles/projects.css';
import { specialChars } from '@testing-library/user-event';

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
        <p>{javascript_projects_title_text}</p>
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
        <p id="generated_password">Generated Password:</p>
      </div>
    </Fragment>
  );
};

function ShowGeneratedPassword() {}

function get_selected_characters() {
  let selections = document.querySelectorAll('.checkboxes label');

  selections.forEach((selection) => {
    if (symbol_list.includes(selection.textContent)) {
    }
  });
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
    <label className="container">
      {symbol}
      <input type="checkbox" />
      <span className="checkmark" />
    </label>
  ));
}

export default JSProjects;
