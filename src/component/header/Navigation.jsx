import React, {useState} from "react";
import navImage from "../images/icon-arrow-down.svg";
import navDownImage from '../images/icon-arrow-up.svg';
function Navigation() {
  // function show() {
  //   const navDisplay = document.querySelector('#navDisplay');
  //   navDisplay.style.display = 'block';
  //   const downArrow = document.querySelector('#downArrow');
  //   downArrow.setAttribute('src', navDownImage);
  // }
  return (
    <ul>
      <li>
        Features
        <img src={navImage} alt="nav-image" onClick={show} className="nav-image" id="downArrow" />
      </li>
      <li>
        Company
        <img src={navImage} alt="nav-image" className="nav-image" />
      </li>
      <li>Careers</li>
      <li>About</li>
    </ul>
  );
}

export default Navigation;
