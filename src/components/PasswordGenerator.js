import React, { useState } from 'react';
import { symbol_list } from '../styles/styling_variables';

let selected_symbol_list = [];

const PasswordGenerator = () => {
  const [password, set_new_password] = useState('sT2$-dv!m-d%$^');

  function generate_password(passed_char) {
    console.log(`passed char: ${passed_char}`);

    if (!selected_symbol_list.includes(passed_char)) {
      selected_symbol_list.push(passed_char);
      console.log(`char not present, new list: ${selected_symbol_list}`);
    } else {
      let char_index = selected_symbol_list.indexOf(passed_char);
      selected_symbol_list.splice(char_index, 1);
      console.log(
        `char present and removed, new list: ${selected_symbol_list}`
      );
    }

    let new_char_list = generate_character_array(selected_symbol_list);
    const password_length = 14;
    let temp_password = '';

    console.log(`generating new password...`);

    // Pick chars from a random index of available choices in the array less than the specified length
    for (let i = 0; i < password_length; i++) {
      // Select char form a random index in char list
      let random_char_index = Math.floor(Math.random() * new_char_list.length);
      temp_password += new_char_list[random_char_index];
    }

    set_new_password((x) => (x = temp_password));
  }

  return (
    <>
      <div className="special_characters">
        {/* first row */}
        <div className="checkboxes">
          <label className="container">
            {symbol_list[0]} {/* @ */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[0]);
              }}
            />
          </label>
          <label className="container">
            {symbol_list[1]} {/*$*/}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[1]);
              }}
            />
          </label>
          <label className="container">
            {symbol_list[2]} {/*%*/}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[2]);
              }}
            />
          </label>
          <label className="container">
            {symbol_list[3]} {/*^*/}
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
        <div className="checkboxes">
          <label className="container">
            {symbol_list[4]} {/*&*/}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[4]);
              }}
            />
          </label>
          <label className="container">
            {symbol_list[5]} {/* * */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[5]);
              }}
            />
          </label>
          <label className="container">
            {symbol_list[6]} {/* ( */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[6]);
              }}
            />
          </label>
          <label className="container">
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
        <div className="checkboxes">
          <label className="container">
            {symbol_list[8]} {/* ! */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[8]);
              }}
            />
          </label>
          <label className="container">
            {symbol_list[9]} {/* - */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[9]);
              }}
            />
          </label>
          <label className="container">
            {symbol_list[10]} {/* _ */}
            <input type="checkbox" />
            <span
              className="checkmark"
              onClick={() => {
                generate_password(symbol_list[10]);
              }}
            />
          </label>
          <label className="container">
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
      <div className="password_output">
        <h2 id="label_text">Generated Password:</h2>
        <h2 id="password_display_box">{password}</h2>
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
