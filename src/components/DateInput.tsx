import { ComponentProps } from "react";

type IDateInput = ComponentProps<"input"> & {
  label: string;
  id: string;
};

const DateInput = ({ label, id, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="date" name={id} id={id} {...props} />
    </div>
  );
};

export default DateInput;
