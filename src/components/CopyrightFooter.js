import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyle = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    paddingTop: theme.spacing(4),
    alignItems: 'center'
  }
}));

const CopyrightFooter = () => {
  const classes = useStyle();
  let copy = String.fromCharCode(169); // copyright char

  return (
    <Container maxWidth={'sm'}>
      <Typography align={'center'} className={classes.root}>
        <CopyrightIcon fontSize={'medium'} /> Steven Christensen 2021
      </Typography>
    </Container>
  );
};

export default CopyrightFooter;
