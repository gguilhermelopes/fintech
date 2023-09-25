import FintechSVG from "../../assets/FintechSVG";
import summary from "../../assets/icons/resumo.svg";
import sales from "../../assets/icons/vendas.svg";
import contact from "../../assets/icons/contato.svg";
import exit from "../../assets/icons/sair.svg";

import styles from "./Sidenav.module.css";

const Sidenav = () => {
  return (
    <nav className={`${styles.sidenav} box bg-3`}>
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={summary} alt="" />
          </span>
          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <img src={sales} alt="" />
          </span>
          <a href="">Vendas</a>
        </li>
        <li>
          <span>
            <img src={contact} alt="" />
          </span>
          <a href="">Contato</a>
        </li>
        <li>
          <span>
            <img src={exit} alt="" />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
