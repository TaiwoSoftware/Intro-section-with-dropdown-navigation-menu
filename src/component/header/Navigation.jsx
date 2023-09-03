import {useState} from 'react';
import navImage from "../images/icon-arrow-down.svg";
import navDownImage from '../images/icon-arrow-up.svg';
import NavContainer from './NavContainer';
function Navigation() {
  const [showFeatureDropdown, setShowFeatureDropdown] = useState(false)
  return (
    <ul>
      <li onClick={() => setShowFeatureDropdown(!showFeatureDropdown)}>
        Features
        {showFeatureDropdown ? (
          <img src={navImage} alt="nav-image"  className="nav-image" id="downArrow" />
        ):(
          <img src={navDownImage} alt="nav-image"  className="nav-image" id="downArrow" />
        )}
      </li>
      {showFeatureDropdown &&(
        <NavContainer />
      )}
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
