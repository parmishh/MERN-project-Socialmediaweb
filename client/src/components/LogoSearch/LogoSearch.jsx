import React from "react";
import Logo from "../../img/logo.png";
import Lo from "../../img/search.png";
import './LogoSearch.css'
import './nn.js'
import { UilSearch } from '@iconscout/react-unicons'

import img from "../../img/search.png";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search" >
          <input type="text" id="poke" placeholder="#Explore" / >
            
          <div className="s-icon" onclick="othername();">
           
          
          <a href="#"  onclick="window.find(tt);">
          <UilSearch/>
          </a>
          
            
       
          </div>
      </div>
    </div>
  );
};


export default LogoSearch;