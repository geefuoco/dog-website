import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("available-puppies");
  };
  return (
    <div className="home-container">
      <div className="wrapper">
        <h1>Find the right bully for you and your family</h1>
        <button
          type="button"
          tabIndex="0"
          aria-pressed="false"
          className="view-puppies"
          onClick={handleClick}
        >
          View Puppies
        </button>
      </div>
    </div>
  );
};

export default Home;
