import { Link } from "react-router-dom";
import styles from "./EmptyState.module.css";

const CREATE_PATH = "/create";

function EmptyState() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Elevate Your <br />
        <span>
          Strategic <span className={styles.highlight}>Thinking</span>
        </span>
      </h1>

      <p className={styles.subtitle}>
        A free and flexible app designed to securely capture, organize, and
        reflect on your private thoughts anytime, anywhere.
      </p>

      <Link to={CREATE_PATH} className={styles.cta}>
        Get Started
      </Link>
    </section>
  );
}

export { EmptyState };
