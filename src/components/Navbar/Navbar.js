import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/available-puppies">Available Puppies</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
