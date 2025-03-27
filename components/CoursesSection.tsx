"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import styles from "@/styles/courses-section.module.css"
const courses = [
  {
    id: 1,
    title: "Science (Physics, Chemistry, Biology)",
    description:
      "Dive into the world of science with in-depth knowledge in Physics, Chemistry, and Biology. Conduct experiments and explore scientific theories.",
    icon: "🧪",
    color: "blue",
  },
  {
    id: 2,
    title: "Mathematics (School Level)",
    description:
      "Strengthen problem-solving skills and build a strong foundation in mathematical concepts like algebra, geometry, and basic calculus.",
    icon: "➗",
    color: "cyan",
  },
  {
    id: 3,
    title: "Commerce",
    description:
      "Learn the essentials of business, economics, accounting, and finance, preparing for a career in the world of commerce.",
    icon: "💼",
    color: "green",
  },
  {
    id: 4,
    title: "Humanities (History, Geography, Political Science)",
    description:
      "Study the social sciences to understand the history of societies, human geography, and political systems around the world.",
    icon: "📚",
    color: "amber",
  },
  {
    id: 5,
    title: "Languages (English, Hindi, French, etc.)",
    description:
      "Enhance your communication skills in multiple languages, including English, Hindi, and foreign languages like French and Spanish.",
    icon: "🗣️",
    color: "red",
  },
  {
    id: 6,
    title: "Computer Science",
    description:
      "Learn programming, web development, and digital literacy for the technology-driven world.",
    icon: "💻",
    color: "purple",
  },
  {
    id: 7,
    title: "Economics (Junior College)",
    description:
      "Learn the fundamentals of economics, including microeconomics, macroeconomics, and economic policies shaping the world today.",
    icon: "📈",
    color: "teal",
  },
  {
    id: 8,
    title: "Physical Education & Sports",
    description:
      "Focus on physical fitness, sportsmanship, and teamwork through a variety of indoor and outdoor sports.",
    icon: "🏋️",
    color: "teal",
  },
  {
    id: 9,
    title: "Environmental Studies",
    description:
      "Understand the environment, sustainability practices, and global environmental issues, focusing on real-world solutions.",
    icon: "🌱",
    color: "green",
  },
];



export default function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (section) {
        observer.unobserve(section)
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="courses" className={styles.coursesSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Academic Programs</h2>
        <p className={styles.subtitle}>
          Discover our diverse range of programs designed to nurture every student's unique talents and interests
        </p>

        <div className={styles.courseGrid}>
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`${styles.courseCard} ${styles[`color${course.color}`]}`}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.courseIcon}>{course.icon}</div>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <p className={styles.courseDescription}>{course.description}</p>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

