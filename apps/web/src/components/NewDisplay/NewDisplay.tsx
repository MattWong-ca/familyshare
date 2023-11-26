import styles from './NewDisplay.module.css'

export const NewDisplay = () => {

  return (
    <div className={styles.newDisplay}>

      <div className={styles.landingPageCopy}>
        <p className={styles.title}>FamilyShare</p>
        <p className={styles.tagline}>Share your next generation wallet with loved ones</p>

        <button className="button">Sign up</button>
        <button className="button">Go to dashboard</button>
      </div>

    </div>
  )
}