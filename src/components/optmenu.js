import { NavLink } from "react-router-dom";

export const OptMenu = () => {
  return (
    <>
      <li className="list__item">
        <div className="list__button">
          <i className="fa-solid fa-house-user"></i>
          <NavLink className="nav__link" to="Home">Inicio</NavLink>
        </div>
      </li>
    </>


  );
}