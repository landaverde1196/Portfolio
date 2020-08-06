import React from "react";
import classes from "./Contact.module.css";

const Contact = (props) => (
  <div className={classes.Background}>
    <div className={classes.Content}>
      <h1>Contact</h1>
      <div>
        <h2>
          <span className={classes.Code}> E-mail: </span>
          landaverde1196@gmail.com / alejndro1196@gmail.com
        </h2>
        <h2>
          <span className={classes.Code}>Github: </span>
          <a
            href="https://github.com/landaverde1196"
            rel="noopener noreferrer"
            target="_blank"
            title="Check my Projects"
          >
            github.com/landaverde1196
          </a>
        </h2>
        <h2>
          <span className={classes.Code}>Phone: </span>+504-9794-2430
        </h2>
      </div>
    </div>
  </div>
);

export default Contact;
