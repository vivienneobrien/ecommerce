import React from "react";
import './homepage.styles.scss'

// functional because dont need lifecycle componenets or state
const HomePage = () => {

    return (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle"></span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle"></span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <span className="subtitle"></span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">MEN</h1>
          <span className="subtitle"></span>
        </div>
      </div>
    </div>
  </div>
    )
};


export default HomePage;