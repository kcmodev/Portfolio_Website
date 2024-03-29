import * as React from 'react';
import { makeStyles, Avatar } from '@material-ui/core';

// import profile_picture from '../images/profile_picture.jpg';
import profile_img from '../images/profile_img.jpeg';

const profile_picture_alt_text = 'profile image of site author';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    },
    justifyContent: 'center',
    paddingBottom: theme.spacing(2)
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  medium: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  large: {
    width: theme.spacing(23),
    height: theme.spacing(23)
  }
}));

const ProfileAvatar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        src={profile_img}
        alt={profile_picture_alt_text}
        className={classes.large}
      />
    </div>
  );
};

export default ProfileAvatar;
