import { useState } from 'react';
import { makeStyles, Container, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'whitesmoke',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

const ContactForm = () => {
  const [value, setValue] = useState('Controlled');
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Container maxWidth={'sm'}>
        <form className={classes.root}>
          <div>
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </div>
        </form>
      </Container>
    </>
  );
};

export default ContactForm;
