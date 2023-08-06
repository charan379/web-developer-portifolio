import React from "react";
import styles from "./Intro.module.css";

const Intro = (props: { profile: Profile }) => {
  return (
    <>
      <div id="intro" className={styles.intro}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={`${styles.colA} col-a`}>
            <header>
              <h4>Hello world 👋🏾</h4>
              <h1>I&apos;m Charan,</h1>
            </header>
            <div className={styles.content}>
              <p className={`${styles.line} ${styles.typing}`}>
                Front End Web Developer.
              </p>
              <a className={`${styles.button} button`} href="#contact">
                {" "}
                Talk to me{" "}
              </a>
            </div>
          </div>

          <div className={`${styles.colB} col-b`}>
            <img
              src="assets/images/notebook.png"
              alt="Image of a notebook."
              id="notebook-1"
            />
            <img
              src="assets/images/notebook-2.png"
              alt="Image of a laptop with a broken screen"
              id="notebook-2"
            />
            <img
              src="assets/images/notebook-2-white.png"
              alt="Image of a laptop with a broken screen"
              id="notebook-2-white"
            />
            <img
              src="./assets/images/glass.png"
              alt="Image of shards of glass with HTML5, CSS3 and JavaScript icons on top."
              id="glass"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
