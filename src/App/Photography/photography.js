import React from 'react';
import PhotoNav from './Components/PhotoNav';

const Photography = ({ match }) => {
  return (
    <div className="bodyContents">
      <PhotoNav localPath={match.path} />
    </div>
  );
};
export default Photography;
