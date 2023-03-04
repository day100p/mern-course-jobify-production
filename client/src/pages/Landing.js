import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

function Landing() {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby fixie literally deep v, raw denim sustainable organic
              pabst. Hella plaid franzen, waistcoat kale chips actually PBR&B
              distillery lyft flannel. Pok pok XOXO tumblr retro gentrify irony
              next level church-key unicorn mixtape swag palo santo. Actually
              slow-carb cray leggings williamsburg, mustache pinterest
              post-ironic drinking vinegar hashtag kitsch pour-over. Tacos
              williamsburg godard chicharrones chillwave letterpress prism kale
              chips master cleanse jianbing scenester. Man braid tbh pabst
              sartorial, edison bulb pop-up JOMO vaporware air plant keytar
              helvetica green juice hella sustainable.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
}

export default Landing;
