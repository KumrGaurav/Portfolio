
// import React from "react";
// import styles from "./Projects.module.css";
// import projects from "../../data/projects.json";
// import { ProjectCard } from "./ProjectCard";

// export const Projects = () => {
//   return (
//     <section className={styles.container} id="projects">
//       <h2 className={styles.title}>Projects</h2>
//       <div className={styles.projectsGrid}>
//         {projects.map((project, id) => (
//           <ProjectCard key={id} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };

import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>Here are some of my recent works</p>
      </div>
      
      <div className={styles.projectsGrid}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
