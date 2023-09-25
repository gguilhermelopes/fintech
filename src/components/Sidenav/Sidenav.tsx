import { NavLink } from "react-router-dom";

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
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={sales} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={contact} alt="" />
          </span>
          <NavLink to="https://gguilhermelopes.github.io/">Contato</NavLink>
        </li>
        <li>
          <span>
            <img src={exit} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
