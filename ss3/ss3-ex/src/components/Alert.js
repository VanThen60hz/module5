import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Alert = ({ text }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {text}
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Alert;
