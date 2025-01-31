import React from 'react'
import styles from "./Certificate.module.css";
function Certificate() {
    return (
        <div className={styles.certifications} id="internships">
          <h2>Internships & Certifications</h2>
          {/* Add your certification details here */}
          <div className={styles.certificate}>
          <p className={styles.para1}>Java Developer Intern  <span>Tanaashi Technology - April 24 - Oct 24</span></p>
            <p className={styles.para1}>Web Development Intern  <span>NinjaBytes - Jan 24 - Feb 24</span></p>
            <p className={styles.para1}>Machine Learning Intern <span>Code Decode - Dec 23 - Jan 24</span></p>
            <p className={styles.para1}>Web Development Intern <span>Teachnook Ed tech - Dec 22 - Jan 23</span></p>
            <p className={styles.para1}>Java Foundation Certificate <span>Infosys - Feb 24</span></p>
            <p className={styles.para1}>DataBase Management Certificate <span>Infosys - Feb 24</span></p>
            <p className={styles.para1}>Introduction to NoSQL Database Certificate <span>Infosys - Feb 24</span></p>

          {/* Add more certifications as needed */}
          </div>
        </div>
      );
}

export default Certificate
