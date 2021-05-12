import React from 'react';
import { AppBar, Avatar, withStyles } from '@material-ui/core';
import profile_picture from '../images/profile_picture.jpg';

const profile_picture_alt_text = 'website author profile picture';

const StyledAvatar = withStyles({
  root: {
    // height: '13.3rem',
    // width: '10rem'
    transform: 'scale(4)'
  }
})(Avatar);

const ProfilePicture = () => {
  return (
    <>
      <StyledAvatar src={profile_picture}>
        {/*<img*/}
        {/*  // className={'profile-img'}*/}
        {/*  src={profile_picture}*/}
        {/*  alt={profile_picture_alt_text}*/}
        {/*/>*/}
      </StyledAvatar>
    </>
  );
};

export default ProfilePicture;
