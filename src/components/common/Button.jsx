import styles from "./Button.module.css";

function Button({
  type = "button",
  variant = "default",
  onClick,
  children,
  ...rest
}) {
  const className =
    variant === "cancel"
      ? styles.cancelBtn
      : variant === "save"
      ? styles.saveBtn
      : styles.btn;

  return (
    <button type={type} className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export { Button };
