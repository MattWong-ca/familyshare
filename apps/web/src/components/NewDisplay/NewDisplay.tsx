import styles from './NewDisplay.module.css'
import { Link } from 'react-router-dom';

export const NewDisplay = () => {

  return (
    <div className={styles.newDisplay}>

      <div className={styles.landingPageCopy}>
        <p className={styles.title}>FamilyShare</p>
        <p className={styles.tagline}>Share your next generation wallet with loved ones</p>

        <Link to="/test" className={styles.link}>
        <button className="button">Sign up</button>
        </Link>
        <button className="button">Go to dashboard</button>
      </div>

    </div>
  )
}