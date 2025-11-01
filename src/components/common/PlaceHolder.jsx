import styles from "./PlaceHolder.module.css";

function PlaceHolder({ value }) {
  return <div className={styles.placeHolder}>{value}</div>;
}

export { PlaceHolder };
