import navImage from "../images/icon-arrow-down.svg";
function Navigation() {
  return (
    <ul>
      <li>
        Features
        <img src={navImage} alt="nav-image" className="nav-image" />
      </li>
      <li>
        Company
        <img src={navImage} alt="nav-image" className="nav-image" />
      </li>
      <li>
        Careers
      </li>
      <li>
        About
      </li>
    </ul>
  );
}

export default Navigation;
