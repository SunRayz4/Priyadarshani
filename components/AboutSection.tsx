"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/about-section.module.css";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Our School</h2>
          <p className={styles.description}>
            Learn.....Grow.....Change and know the Truth
          </p>
          <p className={styles.description}>
            Priyadarshani School Bhosari is a campus of love and compassion
            towards humanity. The massive school buildings are surrounded by
            Mother Nature all around it. This creates the right ambience for
            learning, which makes an individual grateful towards existence and
            makes learning a never ending process.
          </p>
          <p className={styles.description}>
            Priyadarshani believes that education is the foundation to coexist
            peacefully with our planet. Priyadarshani strives to be reliable for
            self & others as well in harmony with society.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>43+</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>600+</span>
              <span className={styles.statLabel}>Qualified Teachers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>14000+</span>
              <span className={styles.statLabel}>Alumni</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/about-us-photo.png"
            alt="School campus"
            width={800}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
