import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Tika Adhikari</p>
          <p> and I'm a Software developer</p>
        </h1>
        <Link to="about">
          <button>More Info About Me</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/IMG_1929.jpg`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
