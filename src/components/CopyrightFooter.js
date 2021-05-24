import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyle = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    paddingTop: theme.spacing(4)
  }
}));

const CopyrightFooter = () => {
  const classes = useStyle();
  // let copy = String.fromCharCode(169); // copyright char

  return (
    <Container maxWidth={'sm'}>
      <Typography align={'center'} className={classes.root}>
        <CopyrightIcon fontSize={'medium'} /> Steven Christensen 2021
      </Typography>
    </Container>
  );
};

export default CopyrightFooter;
