import styles from './LandingPage.module.css'
import { Link } from 'react-router-dom';

export const LandingPage = () => {

  return (
    <div className={styles.newDisplay}>
      <div className={styles.landingPageCopy}>
        <p className={styles.title}>FamilyShare</p>
        <p className={styles.tagline}>Share your next generation wallet with loved ones</p>

        <Link to="/signup" className={styles.link}>
          <button className="button">Sign up</button>
        </Link>
        <Link to="/home" className={styles.link}>
          <button className="button">Go to dashboard</button>
        </Link>
      </div>

    </div>
  )
}