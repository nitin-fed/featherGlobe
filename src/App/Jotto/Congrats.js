import React from "react";
import { Input } from "./Input";
import PropTypes from "prop-types";

export const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulations</span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};
Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
