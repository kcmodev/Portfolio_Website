import React, { Fragment } from 'react';
import javascript_icon from '../../icons/javascript_logo.png';
import {
  javascript_projects_title_text,
  js_logo_alt_text
} from './text_variables';
import { programming_language_icon } from '../styles/styling_variables';
import '../styles/projects.css';

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
        <div className="special_characters">
          <h1 id="section_title">Select your desired special characters:</h1>
          <div className="checkboxes">
            <GenerateSymbolCheckboxes />
          </div>
          <div className="checkboxes">
            <GenerateAlphanumericCheckboxes />
            <div className="custom_select container">
              <label>
                Number of characters:
                <select>
                  <GenerateLengthSelection />
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="password_output">
        <p id="generated_password">Generated Password:</p>
      </div>
    </Fragment>
  );
};

function GenerateSymbolCheckboxes() {
  const symbols = [
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
    'all'
  ];
  return symbols.map((symbol) => (
    <label className="container">
      {symbol}
      <input type="checkbox" />
      <span className="checkmark" />
    </label>
  ));
}

function GenerateAlphanumericCheckboxes() {
  const choices = ['Upper case letters (A-Z)', 'Lower case letters (a-z)'];
  return choices.map((choice) => (
    <label className="container">
      {choice}
      <input type="checkbox" />
      <span className="checkmark" />
    </label>
  ));
}

function GenerateLengthSelection() {
  let max_password_length = [];
  for (let i = 12; i <= 25; i++) {
    max_password_length.push(i);
  }

  return max_password_length.map((number) => (
    <option value={number}>{number}</option>
  ));
}

export default JSProjects;
