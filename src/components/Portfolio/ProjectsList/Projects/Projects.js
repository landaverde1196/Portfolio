import React from "react";
import classes from "./Projects.module.css";

const Projects = (props) => {
  let style = null;
  if (props.noApp === false) {
    style = { display: "none" };
  }

  return (
    <li className={classes.List}>
      <div className={classes.MyProjects}>
        <div className={classes.Thumbnail}>
          <a href={props.app} target="_blank" rel="noopener noreferrer">
            <img
              src={props.picture}
              alt={props.alt}
              className={classes.Image}
            />
          </a>
        </div>
        <div className={classes.Content}>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <a
            href={props.app}
            target="_blank"
            rel="noopener noreferrer"
            style={style}
          >
            CHECK IT OUT
          </a>
          <a href={props.code} target="_blank" rel="noopener noreferrer">
            SEE CODE
          </a>
        </div>
      </div>
    </li>
  );
};

export default Projects;
