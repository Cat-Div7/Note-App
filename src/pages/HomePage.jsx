import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@utils/icons";
import { AnimatePresence, motion } from "framer-motion";
import { Options, NoteList } from "@components";

const CREATE_PATH = "create";

function HomePage() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const navToggleHandler = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 640;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <FontAwesomeIcon icon={faStarOfLife} className={styles.logoIcon} />
          <span className={styles.logoText}>My Notes</span>
        </div>

        {isMobile && (
          <div
            className={`${styles.toggleButton} ${
              open ? styles.active : undefined
            }`}
            onClick={navToggleHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {/* Options */}
        {!isMobile && <Options PATH={CREATE_PATH} />}

        {isMobile && (
          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                className={styles.mobileOptions}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Options PATH={CREATE_PATH} />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </header>

      {/* TODO => if records is empty ? Show Welcome Component Called Empty State { Here }*/}
      {/* TODO => if records is empty ? Show Welcome Component Called PlaceHolder in { All Notes Page }*/}
      {/* TODO => if records Exist ? Show First 5 Only and placeHolder for Sixth if Exist And Number of Notes */}
      {/* Note List */}
      <NoteList>List</NoteList>
    </div>
  );
}

export { HomePage };
