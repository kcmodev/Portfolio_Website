import React, { useState } from 'react';

let selected_symbol_list = [];
const max_pass_length = 24;
const min_pass_length = 10;
const slider_start_value = 21;

export const symbol_list = [
  '@', // 0
  '$', // 1
  '%', // 2
  '^', // 3
  '&', // 4
  '*', // 5
  '(', // 6
  ')', // 7
  '!', // 8
  '-', // 9
  '_', // 10
  '#' // 11
];

const PasswordGenerator = () => {
  const [password, set_password] = useState('yfqHQJXFGkoiZRhBUTtr');
  const [pass_length, set_pass_length] = useState(slider_start_value);

  // dynamically generate password based on length selected refreshing on change
  const pass_length_updater = (length) => {
    set_pass_length((e) => (e = length));
    generate_password();
  };

  function generate_password(passed_char = null) {
    let temp_password = '';
    let length_selected = parseInt(document.querySelector('.slider').value);

    // set password length
    set_pass_length(length_selected);

    // if symbol not present add, else remove
    if (passed_char != null) {
      if (!selected_symbol_list.includes(passed_char)) {
        selected_symbol_list.push(passed_char);
      } else {
        let char_index = selected_symbol_list.indexOf(passed_char);
        selected_symbol_list.splice(char_index, 1);
      }
    }

    let new_char_list = generate_character_array(selected_symbol_list);

    // Pick chars from a random index of available choices in the array less than the specified length
    for (let i = 0; i < pass_length; i++) {
      // Select char form a random index in char list
      let random_char_index = Math.floor(Math.random() * new_char_list.length);
      let char_to_add = new_char_list[random_char_index];

      temp_password += char_to_add;

      // remove used character from list to avoid duplicates
      new_char_list.splice(new_char_list.indexOf(char_to_add), 1);
    }

    set_password((e) => (e = temp_password));
  }

  return (
    <>
      <div className={'container flex center-flex'}>
        {/* first row */}
        <div className={'checkbox-col'}>
          <label className={'checkbox-container'}>
            {symbol_list[0]} {/* @ */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[0]);
              }}
            />
          </label>
          <label className={'checkbox-container'}>
            {symbol_list[1]} {/* $ */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[1]);
              }}
            />
          </label>
          <label className={'checkbox-container'}>
            {symbol_list[2]} {/* % */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[2]);
              }}
            />
          </label>
          <label className={'checkbox-container'}>
            {symbol_list[3]} {/* ^ */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[3]);
              }}
            />
          </label>
        </div>

        {/* second row */}
        <div className={'checkbox-col'}>
          <label className={'checkbox-container'}>
            {symbol_list[4]} {/*&*/}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[4]);
              }}
            />
          </label>
          <label className={'checkbox-container'}>
            {symbol_list[5]} {/* * */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[5]);
              }}
            />
          </label>
          <label className={'checkbox-container'}>
            {symbol_list[6]} {/* ( */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[6]);
              }}
            />
          </label>
          <label className={'checkbox-container'}>
            {symbol_list[7]} {/* ) */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[7]);
              }}
            />
          </label>
        </div>

        {/* third row */}
        <div className={'checkbox-col'}>
          <label className={'checkbox-container'}>
            {symbol_list[8]} {/* ! */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[8]);
              }}
            />
          </label>
          <label className={'checkbox-container'}>
            {symbol_list[9]} {/* - */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[9]);
              }}
            />
          </label>
          <label className={'checkbox-container'}>
            {symbol_list[10]} {/* _ */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[10]);
              }}
            />
          </label>
          <label className={'checkbox-container'}>
            {symbol_list[11]} {/* # */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[11]);
              }}
            />
          </label>
        </div>
      </div>

      {/* password length slider*/}
      <div className={'container flex center-flex'}>
        <p>Password length: </p>
        <input
          type="range"
          min={min_pass_length}
          max={max_pass_length}
          defaultValue={slider_start_value}
          className="slider"
          name="password_length"
          onChange={() =>
            pass_length_updater(
              parseInt(document.querySelector('.slider').value)
            )
          }
        />
        <p>{pass_length}</p>
      </div>

      {/* Generated password display */}
      <div className={'container flex center-flex'}>
        <p>Generated Password:</p>
        <p>{password}</p>
      </div>
    </>
  );
};

function generate_character_array(selected_special_chars) {
  let final_character_list = [];

  // add a-z and A-Z
  // 65 - 90 === A-Z in decimal unicode
  // 97 - 122 === a-z in decimal unicode
  for (let i = 65; i < 91; i++) {
    final_character_list.push(String.fromCharCode(i)); // add upper case

    let lower_case = i + 32; // difference in unicode values between upper and lower case is 32
    final_character_list.push(String.fromCharCode(lower_case)); // add lower case
  }

  // add all special characters to the list
  for (let i = 0; i < selected_special_chars.length; i++) {
    final_character_list.push(selected_special_chars[i]);
  }

  // return the finalized list
  return final_character_list;
}

export default PasswordGenerator;
