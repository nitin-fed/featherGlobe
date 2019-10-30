import React from "react";
import NavigationBar from "./Components/navigationBar";

const App = ({ match }) => {
  return (
    <div className="bodyContents">
      <NavigationBar localPath={match.path} />
    </div>
  );
};

export default App;
