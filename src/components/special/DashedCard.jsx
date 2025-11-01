import { Link } from "react-router-dom";
import styles from "./DashedCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@utils/icons";

const NOTES_PATH = "/all-notes";

function DashedCard() {
  return (
    <Link to={NOTES_PATH} className={styles.card}>
      <FontAwesomeIcon icon={faEllipsisH} className={styles.icon}>
        more_horiz
      </FontAwesomeIcon>

      <div className={styles.textContainer}>
        <p className={styles.title}>Show More</p>
        <p className={styles.subtitle}>Click to see all your notes</p>
      </div>
    </Link>
  );
}

export { DashedCard };
