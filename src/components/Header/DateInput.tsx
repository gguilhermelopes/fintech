import { ComponentProps } from "react";
import styles from "./DateInput.module.css";

type IDateInput = ComponentProps<"input"> & {
  label: string;
  id: string;
};

const DateInput = ({ label, id, ...props }: IDateInput) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        type="date"
        name={id}
        id={id}
        {...props}
      />
    </div>
  );
};

export default DateInput;
