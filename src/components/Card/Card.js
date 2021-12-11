import "./Card.scss";
import PropTypes from "prop-types";

const Card = ({ image, alt, text, name, gender }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img alt={alt} src={image} />
      </div>
      <div className="card-body">
        <h2>Hi, I'm {name}</h2>
        <p>Sex: {gender}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default Card;
