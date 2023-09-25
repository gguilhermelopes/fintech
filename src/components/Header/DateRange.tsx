import { useState } from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");

  return (
    <form onSubmit={(event) => event.preventDefault()} className="box flex">
      <DateInput
        id="start"
        label="Início"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        id="finish"
        label="Final"
        value={finish}
        onChange={({ target }) => setFinish(target.value)}
      />
    </form>
  );
};

export default DateRange;
