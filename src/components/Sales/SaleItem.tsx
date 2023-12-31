import { NavLink } from "react-router-dom";

import { ISale } from "../../context/DataContext";

import styles from "./SaleItem.module.css";

const SaleItem = ({ sale }: { sale: ISale }) => {
  return (
    <div className={`${styles.saleItem} box`}>
      <NavLink to={`/vendas/${sale.id}`}>{sale.id}</NavLink>
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
