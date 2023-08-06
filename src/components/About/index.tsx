import React from "react";
import styles from "./About.module.css";

const About = (props: { profile: Profile }) => {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={`${styles.colA} col-a`}>
            <header>
              <h2>About me</h2>
            </header>
            <div className={`${styles.content} content`}>
              <p>{props.profile.aboutMe}</p>
            </div>
          </div>

          <div className={`${styles.colB} col-b`}>
            <img src={props.profile.displayPicture} alt={props.profile.name} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
