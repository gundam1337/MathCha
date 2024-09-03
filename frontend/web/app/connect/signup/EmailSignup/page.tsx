import RegistrationForm from "./RegistrationForm";
import styles from "./SignUpComponent.module.css";

export default function Signup() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.leftColumn}>
            <div className={styles.greyBox}></div>
            <div className={styles.equationContainer}></div>
          </div>
          <div className={styles.rightColumn}>
            <RegistrationForm></RegistrationForm>
          </div>
        </div>
      </div>
    </div>
  );
}
