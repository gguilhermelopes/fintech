import SalesChart from "../components/Summary/SalesChart";
import Loading from "../components/UI/Loading";
import { useData } from "../context/DataContext";

import styles from "./Summary.module.css";

const Summary = () => {
  const { data, loading } = useData();

  if (loading) return <Loading />;

  if (!data) return null;
  return (
    <section>
      <div className={`${styles.summary} flex mb`}>
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((a, b) => a + b.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((a, b) => a + b.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((a, b) => a + b.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <SalesChart data={data} />
      </div>
    </section>
  );
};

export default Summary;
