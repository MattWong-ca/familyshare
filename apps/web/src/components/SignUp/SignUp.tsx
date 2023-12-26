import styles from './SignUp.module.css'

export const SignUp = () => {

  return (
    <div className={styles.newDisplay}>

      <div className={styles.landingPageCopy}>
        <p className={styles.title}>Sign Up</p>
        <p className={styles.tagline}>Share your next generation wallet with loved ones</p>

        <button className="button">Back</button>
        <button className="button">Next</button>
      </div>

    </div>
  )
}