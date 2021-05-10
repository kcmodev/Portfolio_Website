import React from 'react';
import profile_picture from '../images/profile_picture.jpg';

const profile_picture_alt_text = 'website author profile picture';

const ProfilePicture = () => {
  return (
    <>
      <img
        className={'profile-img'}
        src={profile_picture}
        alt={profile_picture_alt_text}
      />
    </>
  );
};

export default ProfilePicture;
