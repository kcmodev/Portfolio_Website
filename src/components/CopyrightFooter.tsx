import { makeStyles, Typography, Container } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyle = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(4)
  },
  copySymbol: {
    paddingRight: theme.spacing(1)
  }
}));

const CopyrightFooter = () => {
  const classes = useStyle();

  return (
    <Container maxWidth={'md'}>
      <Typography align={'center'} className={classes.root}>
        <CopyrightIcon fontSize={'small'} className={classes.copySymbol} />{' '}
        Steven Christensen {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default CopyrightFooter;
