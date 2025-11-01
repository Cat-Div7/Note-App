import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const HOME_PATH = "/";

function ErrorPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <div className={styles.badge}>Page Not Found</div>

      <button className={styles.button}>
        <Link to={HOME_PATH} className={styles.link}>
          <span className={styles.text}>Go Home</span>
        </Link>
      </button>
    </main>
  );
}

export { ErrorPage };
