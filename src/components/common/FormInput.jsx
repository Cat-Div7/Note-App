import styles from "./FormInput.module.css";

function FormInput({ tagName = "input", label, value, ...props }) {
  const Tag = tagName;
  const validity = !!value.trim();

  return (
    <label className={styles.label}>
      {label}
      <Tag
        {...props}
        value={value}
        className={`${styles[Tag]} ${validity ? '' : styles.error}`}
      />
    </label>
  );
}

export { FormInput };
