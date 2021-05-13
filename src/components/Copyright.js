import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Copyright = () => {
  let copy = String.fromCharCode(169); // copyright char

  return (
    <>
      <Container maxWidth={'sm'}>
        <Typography align={'center'}>{copy} Steven Christensen 2021</Typography>
      </Container>
    </>
  );
};

export default Copyright;
