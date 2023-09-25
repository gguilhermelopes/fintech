import { useData } from "../../context/DataContext";
import styles from "./MonthButton.module.css";

const setMonthName = (n: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + n);

  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
};

const formatDate = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

const MonthButton = ({ n }: { n: number }) => {
  const { setStart, setFinish } = useData();

  const selectMonth = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setStart(formatDate(firstDay));
    setFinish(formatDate(lastDay));
  };

  return (
    <button onClick={() => selectMonth(n)} className={styles.button}>
      {setMonthName(n)}
    </button>
  );
};

export default MonthButton;
