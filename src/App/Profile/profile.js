import React from "react";
import "./profile.css";
import ProfileNav from "./Components/ProfileNav";

const Profile = ({ match }) => {
  return (
    <div className="bodyContents">
      <ProfileNav localPath={match.path} />
    </div>
  );
};

export default Profile;
