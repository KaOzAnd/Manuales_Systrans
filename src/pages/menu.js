import { NavLink } from "react-router-dom";

// import { OptMenu } from "../components/optmenu";
// import { OptMenuMult } from "../components/optmenumult";

export const Menu = () => {
    return (
    <nav className="nav">
        <ul className="list">

        <li className="list__item">
        <div className="list__button">
          <i className="fa-solid fa-house-user"></i>
          <NavLink className="nav__link" to="Home">Inicio</NavLink>
        </div>
      </li>


        {/* <OptMenu/> */}
        {/* <OptMenuMult/>
        <OptMenuMult/> */}
        </ul>
      </nav>
    );
  }