import React from "react";
import styles from "@/styles/teachers.module.css"; // Import your CSS styles here
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Header */}
        <h1 className={styles.heading}>Teachers</h1>

        {/* Content Section (First display the paragraph) */}
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Human values cannot be learnt from lectures or text-books. Our teachers seek to impart values to
              students, they practice themselves first and set an example. Their heart is filled with love and leads
              the children under their care along the ideal path. They resolve to sacrifice everything for the sake of
              the pure-hearted children who rely on us for guidance.
            </p>

            <p className={styles.paragraph}>
              Our teachers teach love to students only through love. If a pupil has a vice, he or she alone suffers
              from it. But, if a teacher has a vice, thousands are polluted. Teachers can achieve any high ideal,
              provided they are co-operative, well-disciplined, soaked in service and sacrifice and fully determined
              to succeed.
            </p>

            <p className={styles.paragraph}>
              Our teachers are not to be bound by considerations of hours of work. When necessary, they are prepared
              to stay on for hours to remove the doubts of students and help them to complete their assignments. They
              consider this as their duty.
            </p>

            <p className={styles.paragraph}>
              If teachers play their role properly, the nation can be transformed. For all the malpractices among
              students, the parents and the teachers are to blame.
            </p>
          </div>
        </div>

        {/* Image Section (After the paragraphs) */}
        <div className={styles.imageWrapper}>
          <img
            src="/teachers.jpg"
            alt="Teachers Image"
            className={styles.teacherImage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
