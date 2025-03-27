import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Footprints, Network } from "lucide-react"; // Updated professional icons
import styles from "@/styles/history.module.css"; // Import the CSS file

export default function History() {
  return (
    <div>
      {/* Render the Navbar */}
      <Navbar />

      {/* Wrapper div to manage spacing */}
      <div className={styles.contentWrapper}>
        {/* Main Heading */}
        <h1 className={styles.mainHeading}>History Of Priyadarshani</h1>

        {/* History Cards */}
        <div className={styles.cardsContainer}>
          {/* Journey Card */}
          <div className={`${styles.card} ${styles.journeyCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Footprints size={40} color="#D4A017" /> {/* Gold for legacy and impact */}
              </div>
              <h2>Our Journey</h2>
              <p>
                Today, the dream of Late Shri Indraman Singh and his children 
                has turned into a reality. With just 5 students, the small school 
                which he started in Bhosari on 15th August 1982 has now become one 
                of the best schools in Pune. Over the years, the number of students 
                has grown to over 15,000, turning the institution’s name larger with 
                a group of Schools and Colleges in 8 different places.
              </p>
            </div>
          </div>

          {/* Growth and Expansion Card */}
          <div className={`${styles.card} ${styles.growthCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Network size={40} color="#1E88E5" /> {/* Deep blue for expansion and trust */}
              </div>
              <h2>Growth and Expansion</h2>
              <p>
                From its humble beginnings, Priyadarshani has grown exponentially. 
                Starting with a single small campus in Bhosari, today the institution 
                boasts a wide network across Pune, with multiple campuses offering a 
                diverse range of academic programs. The school continues to excel in 
                nurturing students not just academically, but also in personal growth, 
                preparing them for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    
      {/* Render the Footer */}
      <Footer />
    </div>
  );
}
