import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import "../style.css";
function Footer() {
  return (
    <footer>
      <img src={databiz} alt="databiz" />
      <img src={audiophile} alt="audio" />
      <img src={meet} alt="meet" />
      <img src={maker} alt="maker" />
    </footer>
  );
}
export default Footer;
