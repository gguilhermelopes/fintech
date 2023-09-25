import { useState } from "react";
import DateRange from "./DateRange";
import Months from "./Months";

import styles from "./Header.module.css";

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  return (
    <header className="mb">
      <div className={`${styles.dateRange} mb`}>
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
