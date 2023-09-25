import { useData } from "../context/DataContext";

import styles from "./Summary.module.css";

const Summary = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <section>
      <div className={`${styles.summary} flex mb`}>
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((venda) => venda.status !== "falha")
              .reduce((a, b) => a + b.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((venda) => venda.status === "pago")
              .reduce((a, b) => a + b.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((venda) => venda.status === "processando")
              .reduce((a, b) => a + b.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box">Gráficos</div>
    </section>
  );
};

export default Summary;
