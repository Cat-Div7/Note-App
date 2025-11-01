import styles from "./FormInput.module.css";

function FormInput({ tagName = "input", label, ...props }) {
  const Tag = tagName; 

  return (
    <label className={styles.label}>
      {label}
      <Tag {...props} className={styles[Tag]} />
    </label>
  );
}

export { FormInput };
