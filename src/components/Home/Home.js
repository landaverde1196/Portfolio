import React from "react";
import classes from "./Home.module.css";

import { useHistory } from "react-router-dom";

const Home = (props) => {
  let history = useHistory();

  return (
    <div className={classes.Home}>
      <div className={classes.Title}>
        <h1>Hi, I'm Alejandro</h1>
        <h2>
          I'm a Software Developer who focuses on writing clean code &
          user-friendly experiences. <br />
          I'm a passionate Developer but more importantly I'm passionate about
          technology.
        </h2>
        <div>
          <button
            className={classes.Button}
            onClick={() => history.push("/portfolio")}
          >
            Check my Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
