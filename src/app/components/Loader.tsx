import React from "react";

const Loader = () => {
  return (
    <div className="overlay">
      <div className="spinner-container">
        <div className="spinner-background"></div>
        <div className="spinner-foreground"></div>
      </div>
    </div>
  );
};

export default Loader;
