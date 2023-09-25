import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import DateRange from "./DateRange";
import Months from "./Months";

import styles from "./Header.module.css";

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") setTitle("Resumo");
    else if (location.pathname === "/vendas") setTitle("Vendas");

    document.title = `Fintech | ${title}`;
  }, [location, title]);

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
