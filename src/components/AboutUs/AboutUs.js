import "./AboutUs.scss";
import { useNavigate } from "react-router-dom";
import bulldog from "../../assets/bulldog_4.jpg";
import bulldog2 from "../../assets/bulldog.jpg";
import bulldog3 from "../../assets/bulldog_2.jpg";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1 className="statement">Breeding beautiful bullies since 2000</h1>
        <div className="image-container">
          <img alt="3 bulldogs in a car" src={bulldog} />
          <img alt="bulldog standing outside" src={bulldog2} />
          <img alt="another standing bulldog" src={bulldog3} />
        </div>

        <h2>Ethical Breeding</h2>
        <p>
          As you may know, breeding bulldogs is a taxing proccess to a Bulldog
          Mother. A C-Section is required to give birth. At The Bulldog House,
          we only serve one litter per mother. It's less stress for the Bully
          mother, and it maintains the health of our beautiful bullies.
        </p>
        <h2>Above and Beyond for our Bullies</h2>
        <p>
          Bulldogs are very unique, loving dogs. They require extra effort to
          care for, and are prone to many health problems. We take extra care to
          make sure our bullies are going to suitable homes where they can live
          their best life.
        </p>
      </div>

      <div className="contact-info">
        <p>Have some questions about us or our dogs? </p>
        <button type="button" aria-pressed="false" onClick={handleClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
