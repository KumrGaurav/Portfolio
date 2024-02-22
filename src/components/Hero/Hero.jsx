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
          I'm a Passionate and innovative MCA student at BIT Mesra with expertise in Java, C++, HTML, CSS, and JavaScript. 
          Skilled in web development, problem-solving, and enthusiastic about coding, music, and cricket. Let's connect!
        </p>
        <a href="https://drive.google.com/file/d/1AZy380T6ir8pPP74sEzD_hWaJy6IPlJQ/view?usp=sharing" className={styles.resumeBtn}>
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
