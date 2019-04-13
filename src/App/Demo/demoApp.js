import React from "react";
import NavigationBar from "./Components/navigationBar";
import "./App.css";

const App = ({ match }) => {
  return (
    <div className="bodyContents">
      <NavigationBar localPath={match.path} />
    </div>
  );
};

export default App;
