import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import styles from "@/styles/footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.footerAbout}>
            
            {/* ✅ School Logo */}
            <div className={styles.schoolLogo}>
              <Image
                width={80}
                height={80}
                src="./priyadarshani-logo.jpg" // ✅ Make sure your logo is in the public/images folder
                alt="School Logo"
              />
              <h3 className={styles.footerLogo}>Priyadarshani</h3>
            </div>

            <p className={styles.footerDescription}>
              Nurturing minds, building character, and preparing students for a successful future since 1995.
            </p>

            {/* ✅ Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <span>+91 89567 88450 | +91 70660 64189</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <span>priyadarshanischool@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>Priyadarshani, Bhosari, Bhosari-413171</span>
              </div>
            </div>

            {/* ✅ Social Links */}
            <div className={styles.socialLinks}>
              <Link href="#" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={18} />
              </Link>
              <Link href="#" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={18} />
              </Link>
              <Link href="#" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={18} />
              </Link>
              <Link href="#" className={styles.socialLink} aria-label="YouTube">
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          {/* ✅ Footer Links Section */}
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#courses">Academics</Link></li>
                <li><Link href="#testimonials">Students</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>For Students</h4>
              <ul className={styles.linkList}>
                <li><Link href="#">Student Portal</Link></li>
                <li><Link href="#">Library Resources</Link></li>
                <li><Link href="#">Exam Schedule</Link></li>
                <li><Link href="#">Clubs & Activities</Link></li>
                <li><Link href="#">Student Handbook</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>For Parents</h4>
              <ul className={styles.linkList}>
                <li><Link href="#">Parent Portal</Link></li>
                <li><Link href="#">School Calendar</Link></li>
                <li><Link href="#">PTA Information</Link></li>
                <li><Link href="#">Lunch Menu</Link></li>
                <li><Link href="#">Transportation</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>&copy; {currentYear} SchoolConnect. All rights reserved.</div>
          <div className={styles.bottomLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
