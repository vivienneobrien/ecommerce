import React from "react";
import './menu-item.component.scss'
import {withRouter} from "react-router-dom" // this is a higher order component - take components that returns to us a modified component


// doesnt need to hold any state
const MenuItem = ({ title, imageUrl , size, history, linkUrl, match}) => {
  return (
  <div className= {`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}> 

      <div className='background-image'
        style= {{ backgroundImage: `url(${imageUrl})`}}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
  </div>
  )
}

export default withRouter(MenuItem); // with access to locatoin, match and history