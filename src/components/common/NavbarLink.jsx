import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styles from "./NavbarLink.module.css";

function NavbarLink(props) {
  const {
    type = "link",
    path,
    icon,
    iconType = "fontawesome",
    id,
    text,
    isCollapsed,
    index,
    onClick,
    isActiveOverride,
  } = props;

  const classNames = [
    styles.navlink,
    isCollapsed && styles.centered,
    isActiveOverride && styles.active,
  ]
    .filter(Boolean)
    .join(" ");

  // Creating Wrapper & props [ for motion ] based on iconType
  const IconWrapper = iconType === "motion" ? motion.span : "span";

  const iconProps =
    iconType === "motion"
      ? {
          animate: { rotate: isCollapsed ? 180 : 0 },
          transition: { duration: 0.2, ease: "easeInOut" },
          style: { display: "inline-block", transformOrigin: "center" },
        }
      : {};

  // Making Element Based on iconType
  const content = (
    <>
      <IconWrapper {...iconProps}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </IconWrapper>
      {!isCollapsed && <span className={styles.text}>{text}</span>}
    </>
  );

  // button ? Render Button : Render NavLink
  return type === "button" ? (
    <button tabIndex={id} onClick={onClick} className={classNames}>
      {content}
    </button>
  ) : (
    <NavLink
      tabIndex={index}
      to={path}
      className={({ isActive }) =>
        `${classNames} ${isActive ? styles.active : undefined}`
      }
    >
      {content}
    </NavLink>
  );
}

export { NavbarLink };
