import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* <h1 className={styles.title}>Hi, I'm Gaurav</h1> */}
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Gaurav</span>
        </h1>
        <p className={styles.description}>
          As a dedicated tech enthusiast and recent MCA graduate from BIT Noida,
          I bring a wealth of knowledge in React Js, React Native, Java, Spring Boot, C++,
          HTML, CSS, and JavaScript. With a strong foundation in web development
          and a knack for solving complex problems, I am also passionate about
          coding, music, and cricket. I'm excited to collaborate and innovate
          together!
        </p>
        <a
          href="https://drive.google.com/file/d/1aQZVbLMWy3CnK1rU7lF2mbktWcVn4hQk/view?usp=sharing"
          className={styles.resumeBtn}
        >
          View Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage3.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
