import { useState } from "react";
import { NavLink } from "react-router-dom";

const OptMenuParametros = () => {

    const [cl, setAction] = useState('list__hide')

  const open = () => {

    if (cl === 'list__hide')
      setAction('list__show')
    else
      setAction('list__hide')

  };

  return (
    <li className="list__item list__item--click">
      <div className="list__button list__button--click" onClick={open}>
        <i className="fa-solid fa-sitemap" title="Parametros"></i>
        <a href="#" className="nav__link">Parametros</a>
      </div>

      
      <ul className={cl}>
        <li className="list__inside">
          <NavLink to="Bancos" className="nav__link nav__link--inside">Bancos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Ciudades" className="nav__link nav__link--inside">Ciudades</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Departamentos" className="nav__link nav__link--inside">Departamentos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Festivos" className="nav__link nav__link--inside">Festivos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Implementos" className="nav__link nav__link--inside">Implementos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Parametros" className="nav__link nav__link--inside">Parámetros</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Personas" className="nav__link nav__link--inside">Personas</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Salarios" className="nav__link nav__link--inside">Salarios</NavLink>
        </li>
      </ul>
    </li>
  );
  }
export default OptMenuParametros