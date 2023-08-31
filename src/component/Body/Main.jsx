import avatar from "../images/image-hero-desktop.png";
function Main() {
  return (
    <main>
      <h1>
        Make <span className="header-span">remote work</span>
      </h1>
      <img src={avatar} alt="hero" />
      <p>
        Get your team in sync, no matter your location.
        <br />
        Streamline processes, create team rituals, and
        <br /> watch productivity soar.
      </p>
      <button>Learn More</button>
    </main>
  );
}
export default Main;
