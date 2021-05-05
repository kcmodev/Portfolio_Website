import React from 'react';
import profile_picture from '../images/profile_picture.jpg';

const profile_picture_alt_text = 'website author profile picture';

const ProfilePicture = () => {
  return (
    <div className="content_container">
      <img
        className="profile_picture"
        src={profile_picture}
        alt={profile_picture_alt_text}
      />
    </div>
  );
};

export default ProfilePicture;
