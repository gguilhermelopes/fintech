import { ISale } from "../../context/DataContext";

import styles from "./SaleItem.module.css";

const SaleItem = ({ sale }: { sale: ISale }) => {
  return (
    <div className={`${styles.saleItem} box`}>
      <a href="">{sale.id}</a>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SaleItem;
