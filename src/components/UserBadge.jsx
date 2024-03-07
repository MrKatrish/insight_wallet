import React from 'react';

// UserBadge component represents a badge displaying user information
// Props:
// - username: the username to be displayed
// - profilePicture: the URL of the user's profile picture
const UserBadge = ({ username, profilePicture }) => {
  return (
    <div className="user-badge">
      {/* Display the user's profile picture */}
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      {/* Display the username */}
      <span className="username">{username}</span>
    </div>
  );
};

export default UserBadge;
