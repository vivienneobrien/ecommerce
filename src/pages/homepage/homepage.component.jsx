import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

// functional because dont need lifecycle componenets or state
const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
