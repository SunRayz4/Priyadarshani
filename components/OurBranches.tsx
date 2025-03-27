"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/branches.module.css";

const branchData = [
  {
    id: 1,
    location: "Indrayaninagar",
    image: "https://cdn.prod.website-files.com/67520386fccc8744cc9d8c8f/675a76114fd7ae7bc913e5bc_indrayani%20nagar%202_result.avif",
    board: "CBSE & SSC Board",
    address: "Survey No. 45/2, Indrayani Nagar Rd, Rajwada, Indrayani Nagar Sector 2, Bhosari, Pimpri-Chinchwad, Maharashtra 411026"
  },
  {
    id: 2,
    location: "Bhosari",
    image: "https://cdn.prod.website-files.com/67520386fccc8744cc9d8c8f/67702f4c35bf0511109d0abd_BHOSARI%20CBSE%20SSC_result-p-800.avif",
    board: "CBSE & SSC Board",
    address: "Dighi Rd, Sandwik Colony, Adarsh Nagar, Bhosari, Pimpri-Chinchwad, Maharashtra 411039"
  },
  {
    id: 3,
    location: "Moshi",
    image: "https://cdn.prod.website-files.com/67520386fccc8744cc9d8c8f/678933d403f49f9ecf5bbea3_Moshi_result-p-800.avif",
    board: "CBSE Board",
    address: "Gat No-195, Dehu - Alandi Rd, Boratewadi, Moshi, Pune, Maharashtra 412105"
  },
  {
    id: 4,
    location: "Chakan",
    image: "https://cdn.prod.website-files.com/67520386fccc8744cc9d8c8f/67702f0ea05a8879e14a9bcd_Chakan_result-p-800.avif",
    board: "CBSE & SSC Board",
    address: "Pune - Nashik Highway, Waki Kh., Maharashtra 410501"
  },
  {
    id: 5,
    location: "Alandi",
    image: "https://cdn.prod.website-files.com/67520386fccc8744cc9d8c8f/67702f20eb7b3d6c2e39fdb7_Alandi_Pre%20Primary_result-p-800.avif",
    board: "CBSE Board",
    address: "Priyadarshani School, Alandi Rd, Thakur Vasti, Pune, Maharashtra 412105"
  },
  {
    id: 6,
    location: "Pune Police Public School",
    image: "https://cdn.prod.website-files.com/67520386fccc8744cc9d8c8f/67702efe174fc6d87a01bffb_PUNE%20POLICE%20PUBLIC%20SCHOOl%20SSC_result-p-800.avif",
    board: "CBSE & SSC Board",
    address: "Police Headquarters, Police Ground, opp. Rahul Theatre, Shivajinagar, Pune, Maharashtra 411005"
  },
  {
    id: 7,
    location: "Nanekarwadi",
    image: "https://cdn.prod.website-files.com/67520386fccc8744cc9d8c8f/67702f418b0bea6cfa9dbc28_Nanekarwadi_result-p-800.avif",
    board: "CBSE & SSC Board",
    address: "Nanekarwadi, Maharashtra 410501"
  },
  {
    id: 8,
    location: "SRPF School",
    image: "https://cdn.prod.website-files.com/67520386fccc8744cc9d8c8f/67702ee7040f814f161b340e_Copy%20of%20SRPF%20school%20image_result-p-800.avif",
    board: "CBSE & SSC Board",
    address: "SRPF, Wanowrie, Pune, Maharashtra 411040"
  },
  {
    id: 9,
    location: "Satara",
    image: "https://cdn.prod.website-files.com/67520386fccc8744cc9d8c8f/67702f2e3c1f3f8533ee68e7_Satara%20CBSE%20SSC_result-p-800.avif",
    board: "CBSE & SSC Board",
    address: "811B/1, Satara-Pandharpur road, Kumthe Koregaon, Tal-Koregaon, Satara 415501"
  }
];

export default function Branches() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = branchData.length;
  const imagesPerSet = 3;

  const nextSet = () => {
    if (activeIndex < Math.ceil(totalImages / imagesPerSet) - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevSet = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    const section = document.querySelector(".container");
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
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Our Branches</h1>
      <div className={styles.cardsWrapper}>
        {branchData.map((branch, index) => {
          if (index >= activeIndex * imagesPerSet && index < (activeIndex + 1) * imagesPerSet) {
            return (
              <div key={branch.id} className={`${styles.card} ${styles.visible}`}>
                <Image
                  src={branch.image}
                  alt={`Image of ${branch.location} School`}
                  width={400}
                  height={300}
                  className={styles.branchImage}
                />
                <div className={styles.details}>
                  <p className={styles.board}>{branch.board}</p>
                  <p className={styles.address}>{branch.address}</p>
                  <p className={styles.locationName}>{branch.location}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className={styles.navigationButtons}>
        <button
          className={styles.navButton}
          onClick={prevSet}
          disabled={activeIndex === 0}
          aria-label="Previous set of branches"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className={styles.navButton}
          onClick={nextSet}
          disabled={activeIndex === Math.ceil(totalImages / imagesPerSet) - 1}
          aria-label="Next set of branches"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
