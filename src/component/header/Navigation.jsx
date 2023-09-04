import {useState} from 'react';
import navImage from "../images/icon-arrow-down.svg";
import navDownImage from '../images/icon-arrow-up.svg';
import NavContainer from './NavContainer';
import CompanyNavigation from './CompanyNavigation';
function Navigation() {
  const [showFeatureDropdown, setShowFeatureDropdown] = useState(false)
  const toggle = () => setShowFeatureDropdown(!showFeatureDropdown);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false)
  const toggleTwo = () => setShowCompanyDropdown(!showCompanyDropdown);
  return (
    <ul>
      <li onClick={toggle}>
        Features
        {showFeatureDropdown ? (
          <img src={navDownImage} alt="nav-image"  className="nav-image" id="downArrow" />
        ):(
          <img src={navImage} alt="nav-image"  className="nav-image" id="downArrow" />
        )}
      </li>
      {showFeatureDropdown &&(
        <NavContainer />
      )}
      <li onClick={toggleTwo}>
        Company
        {showCompanyDropdown ? <img src={navDownImage} alt="nav-image"  className="nav-image" id="downArrow" />
          : <img src={navImage} alt="nav-image"  className="nav-image" id="downArrow" />
         }
      </li>
      {showCompanyDropdown && (
        <CompanyNavigation />
      )}
      <li>Careers</li>
      <li>About</li>
    </ul>
  );
}

export default Navigation;
