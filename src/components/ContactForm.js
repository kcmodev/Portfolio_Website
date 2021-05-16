import { useState } from 'react';
import {
  makeStyles,
  Container,
  TextField,
  FormGroup,
  Button
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& .MuiTextField-root': {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      width: '50ch'
    }
  }
}));

const useStylesReddit = makeStyles(() => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'whitesmoke',
    '&:hover': {
      backgroundColor: 'whitesmoke'
    },
    '&:focused': {
      backgroundColor: 'whitesmoke'
    },
    '&:active': {
      backgroundColor: 'whitesmoke'
    },
    '&:not(:hover)': {
      backgroundColor: 'whitesmoke'
    }
  }
}));

function CustomTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

const ContactForm = () => {
  const [name, setName] = useState('Please enter your name');
  const [email, setEmail] = useState('Please enter your email');
  const [message, setMessage] = useState('Enter your message');
  const classes = useStyles();

  const clearFormValues = () => {
    let fields = document.querySelectorAll('.MuiTextField-root > input');

    for (let field in fields) {
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(`name: ${name} || email: ${email} || message: ${message}`);
  };

  return (
    <>
      <Container maxWidth={'sm'}>
        <FormGroup className={classes.root}>
          <CustomTextField
            label="Name"
            placeholder={name}
            variant="filled"
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomTextField
            label="Email"
            placeholder={email}
            variant="filled"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomTextField
            label="Message"
            placeholder={message}
            variant="filled"
            required={true}
            multiline={true}
            rowsMax="5"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Container maxWidth={'sm'} className={classes.root}>
            <Button
              variant="contained"
              color="primary"
              size={'large'}
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Container>
        </FormGroup>
      </Container>
    </>
  );
};

export default ContactForm;
