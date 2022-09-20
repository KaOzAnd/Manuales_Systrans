import { NavLink } from "react-router-dom";

import { OptMenu } from "../components/optmenu";
import { OptMenuAdministracion } from "../components/optmenuadministracion";

export const Menu = () => {
    return (
    <nav className="nav">
        <ul className="list">
            <OptMenu/>
            <OptMenuAdministracion/>
        </ul>
      </nav>
    );
  }