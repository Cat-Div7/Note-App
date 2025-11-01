import styles from "./SideNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoonRegular,
  faSunRegular,
  faAngleDoubleLeft,
  faEdit,
  faHouseRegular,
  faNoteStickyRegular,
  faChartBarRegular,
  faSquarePlus,
} from "@utils/icons";
import { useContext } from "react";
import { NavbarLink } from "@components";
import { ThemeContext, CollapseContext } from "@context";

const navLinks = [
  { id: 1, to: "/", icon: faHouseRegular, text: "Home" },
  { id: 2, to: "/all-notes", icon: faNoteStickyRegular, text: "All Notes" },
  { id: 3, to: "/create", icon: faSquarePlus, text: "Create" },
  { id: 4, to: "/statistics", icon: faChartBarRegular, text: "Statistics" },
];

function SideNav() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { isCollapsed, toggleCollapse } = useContext(CollapseContext);

  return (
    <div className={styles.container}>
      {/* Head */}
      <ul className={styles.head}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logoParent}>
            <FontAwesomeIcon
              icon={faEdit}
              className={styles.logo}
            ></FontAwesomeIcon>
          </div>

          {/* Logo Content */}
          {!isCollapsed && (
            <div className={styles.info}>
              <h3 className={styles.head}>NotesApp</h3>
              <p className={styles.body}>React & Vite</p>
            </div>
          )}
        </div>

        {/* Links Content */}
        <ul className={styles.navList}>
          {navLinks.map((link, index) => (
            <NavbarLink
              key={link.id}
              path={link.to}
              icon={link.icon}
              text={link.text}
              index={index}
              isCollapsed={isCollapsed}
            />
          ))}
        </ul>
      </ul>

      {/* Footer */}
      <ul className={`${styles.foot} ${styles.navList}`}>
        {/* Theme Toggle */}
        <NavbarLink
          id={4}
          type="button"
          icon={isDark ? faSunRegular : faMoonRegular}
          text="Theme"
          isCollapsed={isCollapsed}
          onClick={toggleTheme}
        />

        {/* Collapse Button */}
        <NavbarLink
          id={5}
          type="button"
          iconType="motion"
          icon={faAngleDoubleLeft}
          text="Collapse"
          isCollapsed={isCollapsed}
          onClick={toggleCollapse}
        />
      </ul>
    </div>
  );
}

export { SideNav };
