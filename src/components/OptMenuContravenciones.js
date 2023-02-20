import { useState } from "react";
import { NavLink } from "react-router-dom";

const OptMenuContravenciones = () => {

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
        <i className="fa-solid fa-scale-balanced" title="Contravenciones"></i>
        <a href="#" className="nav__link">Contravenciones</a>
      </div>

      
      <ul className={cl}>
        <li className="list__inside">
          <NavLink to="Agentes" className="nav__link nav__link--inside">Agentes</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Audiencias" className="nav__link nav__link--inside">Audiencias</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Comparendos" className="nav__link nav__link--inside">Comparendos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Consultas" className="nav__link nav__link--inside">Consultas</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Dispositivos" className="nav__link nav__link--inside">Dispositivos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="FotoMultas" className="nav__link nav__link--inside">Foto Multas</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Infraccion" className="nav__link nav__link--inside">Infraccion</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Integracion" className="nav__link nav__link--inside">Integracion</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Inventarios" className="nav__link nav__link--inside">Inventarios</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="IPAT" className="nav__link nav__link--inside">IPAT</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Patios" className="nav__link nav__link--inside">Patios</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Rangos" className="nav__link nav__link--inside">Rangos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Resoluciones" className="nav__link nav__link--inside">Resoluciones</NavLink>
        </li>

      </ul>

    </li>
  );
}
export default OptMenuContravenciones