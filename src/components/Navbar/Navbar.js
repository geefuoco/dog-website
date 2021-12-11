import "./Navbar.scss";
import pawprint from "../../assets/pawprint.svg";
import menu from "../../assets/menu_black_24dp.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.addEventListener("resize", () => {
    if (!window.innerWidth > 768) return;
    const links = document.querySelector(".links");
    if (links.classList.contains("expand")) {
      links.classList.remove("expand");
    }
  });

  const toggleNav = () => {
    document.querySelector(".links").classList.toggle("expand");
  };

  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img alt="A pawprint of a dog" src={pawprint} width="60px" />
            <h1>The Bulldog House</h1>
          </div>
        </Link>
        <span className="nav-toggle">
          <img onClick={toggleNav} alt="menu button" src={menu} width="50px" />
        </span>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/available-puppies">Available Puppies</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
