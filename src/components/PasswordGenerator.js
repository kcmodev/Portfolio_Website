import React, { useState } from 'react';
import {
  makeStyles,
  withStyles,
  Container,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider
} from '@material-ui/core';

let selected_symbol_list = [];
const max_pass_length = 24;
const min_pass_length = 10;
const slider_start_value = 21;

const symbol_list = [
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

const WhiteCheckbox = withStyles({
  root: {
    color: 'whitesmoke',
    '&$checked': {
      color: 'whitesmoke'
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: 'whitesmoke',
    justifyContent: 'center'
  },
  checkbox: {
    paddingLeft: theme.spacing(4)
  },
  padTop: {
    paddingTop: theme.spacing(4)
  }
}));

const PasswordGenerator = () => {
  const classes = useStyle();

  const [password, set_password] = useState('----------');
  const [pass_length, set_pass_length] = useState(slider_start_value);
  const [checked_state, setChecked] = useState({});

  const handleChange = (e) => {
    setChecked({ ...checked_state, [e.target.name]: e.target.checked });
    let slider_value = parseInt(
      document.querySelector('.MuiSlider-thumb').innerText
    );
    set_pass_length(slider_value);

    if (e.target.checked) {
      selected_symbol_list.push(e.target.value);
    } else {
      let char_index = selected_symbol_list.indexOf(e.target.value);
      selected_symbol_list.splice(char_index, 1);
    }

    generate_password(slider_value);
  };

  // dynamically generate password based on length selected refreshing on change
  const pass_length_updater = () => {
    let slider_value = parseInt(
      document.querySelector('.MuiSlider-thumb').innerText
    );
    set_pass_length(slider_value);

    console.log(`curr pass len (slider value): ${slider_value}`);

    generate_password(slider_value);
    return `${pass_length}`;
  };

  function generate_password(selected_length) {
    let temp_password = '';
    let new_char_list = generate_character_array(selected_symbol_list);

    // console.log(`new char list: ${new_char_list}`);

    // Pick chars from a random index of available choices in the array less than the specified length
    for (let i = 0; i < selected_length; i++) {
      // Select char form a random index in char list
      let random_char_index = Math.floor(Math.random() * new_char_list.length);
      let char_to_add = new_char_list[random_char_index];

      temp_password += char_to_add;

      // remove used character from list to avoid duplicates
      new_char_list.splice(new_char_list.indexOf(char_to_add), 1);
    }

    set_password(temp_password);
  }

  return (
    <>
      <Container maxWidth={'md'} className={classes.root}>
        <FormGroup className={classes.root}>
          {/* first column */}
          {symbol_list.map((x, i) =>
            i < 4 ? (
              <FormControlLabel
                control={
                  <WhiteCheckbox
                    className={classes.checkbox}
                    onChange={handleChange}
                    name={`checked${i}`}
                    value={x}
                  />
                }
                label={x}
              />
            ) : null
          )}
        </FormGroup>

        <FormGroup className={classes.root}>
          {/* second column */}
          {symbol_list.map((x, i) =>
            i < 8 && i > 3 ? (
              <FormControlLabel
                control={
                  <WhiteCheckbox
                    className={classes.checkbox}
                    onChange={handleChange}
                    name={`checked${i}`}
                    value={x}
                  />
                }
                label={x}
              />
            ) : null
          )}
        </FormGroup>

        <FormGroup className={classes.root}>
          {/* third column */}
          {symbol_list.map((x, i) =>
            i < 12 && i > 7 ? (
              <FormControlLabel
                control={
                  <WhiteCheckbox
                    className={classes.checkbox}
                    onChange={handleChange}
                    name={`checked${i}`}
                    value={x}
                  />
                }
                label={x}
              />
            ) : null
          )}
        </FormGroup>
      </Container>

      {/* password length slider*/}
      <Container maxWidth={'sm'} className={classes.padTop}>
        <Typography className={classes.root}>Password length: </Typography>
        <Slider
          defaultValue={slider_start_value}
          marks
          // getAriaValueText={pass_length_updater}
          aria-labelledby={'discrete-slider'}
          valueLabelDisplay={'auto'}
          step={1}
          min={min_pass_length}
          max={max_pass_length}
          onChangeCommitted={(e, v) => {
            pass_length_updater(v);
          }}
        />
      </Container>

      <Container maxWidth={'md'} className={classes.padTop}>
        {/* Generated password display */}
        <Typography className={classes.root}>Generated Password:</Typography>
        <Typography className={classes.root} gutterBottom={true}>
          {password}
        </Typography>
      </Container>
    </>
  );
};

function generate_character_array(selected_special_chars) {
  let final_character_list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  final_character_list = final_character_list.split('')

  // add all special characters to the list
  selected_special_chars.forEach(x => final_character_list.push(x))

  // return the finalized list
  return final_character_list;
}

export default PasswordGenerator;
