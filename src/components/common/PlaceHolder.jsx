import styles from "./PlaceHolder.module.css";

function PlaceHolder({ value, centered = false }) {
  const className = `${styles.placeHolder} ${
    centered ? styles.centered : undefined
  }`;

  return <div className={className}>{value}</div>;
}

export { PlaceHolder };
