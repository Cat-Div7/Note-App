import styles from "./Options.module.css";
import { useContext } from "react";
import { ThemeContext } from "@root/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoonRegular, faPlus, faSunRegular } from "@utils/icons";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Options({ PATH = "create" }) {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.options}>
      <Link to={PATH} className={styles.addNote}>
        <FontAwesomeIcon icon={faPlus} />
        <span>New Note</span>
      </Link>

      <motion.span
        onClick={toggleTheme}
        className={styles.themeIcon}
        style={{ display: "inline-flex" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ scale: 0, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.160, ease: "easeInOut" }}
          >
            <FontAwesomeIcon icon={isDark ? faSunRegular : faMoonRegular} />
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
}

export { Options };
