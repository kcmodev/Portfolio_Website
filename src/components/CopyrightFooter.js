import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyle = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(4)
  },
  copySymbol: {
    paddingRight: theme.spacing(1)
  }
}));

const CopyrightFooter = () => {
  const classes = useStyle();
  // let copy = String.fromCharCode(169); // copyright char

  return (
    <Container maxWidth={'md'}>
      <Typography align={'center'} className={classes.root}>
        <CopyrightIcon fontSize={'small'} className={classes.copySymbol} />{' '}
        Steven Christensen 2021
      </Typography>
    </Container>
  );
};

export default CopyrightFooter;
