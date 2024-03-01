import React from 'react';

const UserBadge = ({ username, profilePicture }) => {
  return (
    <div className="user-badge">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <span className="username">{username}</span>
    </div>
  );
};

export default UserBadge;