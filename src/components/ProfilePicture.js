import React from 'react';
import profile_picture from '../images/profile_picture.jpg';
import { profile_picture_alt_text } from '../views/text_variables';

const ProfilePicture = () => {
  return (
    <div className="profile_picture_container">
      <img
        className="profile_picture"
        src={profile_picture}
        alt={profile_picture_alt_text}
      />
    </div>
  );
};

export default ProfilePicture;
