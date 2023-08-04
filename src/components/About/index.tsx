import React from 'react'
import styles from "./About.module.css";

const About = () => {
    return (
        <>
            <section id="about" className={styles.about}>
                <div className={`${styles.wrapper} wrapper`}>
                    <div className={`${styles.colA} col-a`}>
                        <header>
                            <h2>About me</h2>
                        </header>
                        <div className={`${styles.content} content`}>
                            <p>
                                My name is Charan Teja, graduated in Bsc.(Computer Science). I develop responsive web pages and systems with an attractive layout. I have a trajectory of about 2 years
                                working with technical support and maintenance of computers, that made me a dedicated and organized professional. Today in the area of ​​live development, continuous learning is focused on JavaScript technologies. I&apos;m looking for opportunities in the market as a dev and, in the near future, I aim to become a Full Stack developer.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.colB} col-b`}>
                        <img
                            src="./assets/images/projects/orange-evolution.gif"
                            alt="Profile image"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About 