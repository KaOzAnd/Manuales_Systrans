import { NavLink } from "react-router-dom";

const OptMenuDigitalizacion = () => {
   return (
    <>
    <li className="list__item">
      <div className="list__button">
      <i class="fa-solid fa-print"></i>
        <NavLink className="nav__link" to="Digitalizacion">Digitalización</NavLink>
      </div>
    </li>
  </>
    );
  }
export default OptMenuDigitalizacion