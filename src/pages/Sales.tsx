import SaleItem from "../components/Sales/SaleItem";
import { useData } from "../context/DataContext";

const Sales = () => {
  const { data } = useData();
  if (!data) return null;
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <SaleItem sale={item} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
