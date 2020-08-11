import React from "react";
import classes from "./Contact.module.css";
// import { Link } from "react-router-dom";
// import CV from "../../../public/CV-CODE1.pdf";
// import { FileSaver } from "file-saver";

const Contact = (props) => {
  // FileSaver.saveAs(
  //   process.env.PUBLIC_URL + "/public/CV-CODE1.pdf",
  //   "CV-Landaverde.pdf"
  // );

  return (
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

          {/* <Link to="/public/CV/CV-CODE1.pdf" target="_blank" download>
            <button>Download CV</button>
          </Link> */}
          {/* <a href="" target="_blank" rel="noopener noreferrer" download="myCV">
            <button>
              <i className="fas fa-download" />
              Download File
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
