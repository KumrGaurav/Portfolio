
// import React, { useState } from "react";
// import styles from "./ProjectCard.module.css";
// import { getImageUrl } from "../../utils";

// export const ProjectCard = ({
//   project: { title, imageSrc, description, skills, demo, source },
// }) => {
//   const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = (e) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = (e) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.carousel}>
//         <div className={styles.carouselInner} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
//           {images.map((img, index) => (
//             <div key={index} className={styles.carouselItem}>
//               <img
//                 src={getImageUrl(img)}
//                 alt={`${title} screenshot ${index + 1}`}
//                 className={styles.image}
//               />
//             </div>
//           ))}
//         </div>
        
//         {images.length > 1 && (
//           <>
//             <button 
//               className={`${styles.carouselControl} ${styles.prev}`}
//               onClick={prevImage}
//               aria-label="Previous"
//             >
//               <span className={styles.arrow}>&#10094;</span>
//             </button>
//             <button 
//               className={`${styles.carouselControl} ${styles.next}`}
//               onClick={nextImage}
//               aria-label="Next"
//             >
//               <span className={styles.arrow}>&#10095;</span>
//             </button>
//             <div className={styles.dots}>
//               {images.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`${styles.dot} ${index === currentImageIndex ? styles.active : ""}`}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setCurrentImageIndex(index);
//                   }}
//                 />
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       <div className={styles.content}>
//         <h3 className={styles.title}>{title}</h3>
//         <p className={styles.description}>{description}</p>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => (
//             <span key={id} className={styles.skill}>
//               {skill}
//             </span>
//           ))}
//         </div>
//         <div className={styles.links}>
//           <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
//             Demo
//           </a>
//           {source && (
//             <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
//               Source
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        galleryRef.current &&
        !galleryRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.cardImageContainer}`)
      ) {
        closeGallery();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowRight") {
        navigateImages(1);
      } else if (e.key === "ArrowLeft") {
        navigateImages(-1);
      }
    };

    if (isGalleryOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      clearTimeout(timeoutRef.current);
    };
  }, [isGalleryOpen]);

  const navigateImages = (direction) => {
    setCurrentImageIndex((prev) => (prev + direction + images.length) % images.length);
  };

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const handleThumbnailHover = (index) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (isGalleryOpen) setCurrentImageIndex(index);
    }, 200);
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.cardImageContainer}
        onClick={() => openGallery(0)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && openGallery(0)}
      >
        <img
          src={getImageUrl(images[0])}
          alt={`Preview of ${title}`}
          className={styles.cardImage}
          loading="lazy"
        />
        {images.length > 1 && (
          <div className={styles.imageCountBadge}>+{images.length - 1}</div>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>

        <div className={styles.skillTags}>
          {skills.map((skill, id) => (
            <span key={id} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.cardActions}>
          <a
            href={demo}
            className={styles.actionButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          {source && (
            <a
              href={source}
              className={styles.actionButtonSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      {isGalleryOpen &&
        ReactDOM.createPortal(
          <div className={styles.galleryModal}>
            <div className={styles.galleryContent} ref={galleryRef}>
              <button
                className={styles.closeButton}
                onClick={closeGallery}
                aria-label="Close gallery"
              >
                &times;
              </button>

              <div className={styles.mainImageContainer}>
                <img
                  src={getImageUrl(images[currentImageIndex])}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  className={styles.mainImage}
                />

                {images.length > 1 && (
                  <>
                    <button
                      className={styles.navButtonLeft}
                      onClick={() => navigateImages(-1)}
                    >
                      &#10094;
                    </button>
                    <button
                      className={styles.navButtonRight}
                      onClick={() => navigateImages(1)}
                    >
                      &#10095;
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className={styles.thumbnailStrip}>
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`${styles.thumbnail} ${
                        index === currentImageIndex ? styles.activeThumbnail : ""
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      onMouseEnter={() => handleThumbnailHover(index)}
                    >
                      <img
                        src={getImageUrl(img)}
                        alt={`Thumbnail ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
