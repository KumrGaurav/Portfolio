import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage1.png")}
          alt="I'm Standing on the ground"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Front End icon" width="100" height="100"/>
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I'm a full stack developer with experience in building responsive
                and optimized web applications using React js, HTML, CSS, JavaScript, and
                backend technologies like Node.js and Java.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/problemsolving.png")} alt="Problem Solving icon" width="100" height="100"/>
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>
              Passionate problem solver with expertise in Java, C++, and data structures. 
              Leverages skills to tackle coding challenges innovatively.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/programming.png")} alt="Prgramming Proficiency icon" width="100" height="100"/>
            <div className={styles.aboutItemText}>
              <h3>Programming Proficiency</h3>
              <p>
                Skilled in Java, C++, HTML, CSS, JavaScript, Python, SQL, and Power BI.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/technicalExpertise.png")} alt="Technical Expertise" width="100" height="100"/>
            <div className={styles.aboutItemText}>
              <h3>Technical Expertise</h3>
              <p>
                Proficient in Data Structures and Algorithms, showcasing strong problem-solving skills.
                Experienced in Object-Oriented Programming principles.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
