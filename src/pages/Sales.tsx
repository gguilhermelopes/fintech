import SaleItem from "../components/Sales/SaleItem";
import Loading from "../components/UI/Loading";
import { useData } from "../context/DataContext";

const Sales = () => {
  const { data, loading } = useData();
  if (loading) return <Loading />;
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
