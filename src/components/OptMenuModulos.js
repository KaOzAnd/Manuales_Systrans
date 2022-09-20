import { useState } from "react";
import { NavLink } from "react-router-dom";

const OptMenuModulos = () => {
  
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
        <i className="fa-solid fa-cubes" title="Modulos"></i>
        <a href="#" className="nav__link">Modulos</a>
      </div>

      
      <ul className={cl}>
        <li className="list__inside">
          <NavLink to="ActividadesExternas" className="nav__link nav__link--inside">Actividades Externas</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Archivo" className="nav__link nav__link--inside">Archivo</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="CursosDeTransito" className="nav__link nav__link--inside">Cursos De Transito</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Conductores" className="nav__link nav__link--inside">Conductores</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Convenios" className="nav__link nav__link--inside">Convenios</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="EditorDeFormatos" className="nav__link nav__link--inside">Editor De Formatos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="GestorInformes" className="nav__link nav__link--inside">Gestor Informes</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Gruas" className="nav__link nav__link--inside">Gruas</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="LiquidacionExtraordinaria" className="nav__link nav__link--inside">Liquidacion Extraordinaria</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Liquidacion ITA" className="nav__link nav__link--inside">Liquidacion ITA</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Pagos" className="nav__link nav__link--inside">Pagos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Reportes" className="nav__link nav__link--inside">Reportes</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="MatrizDeSeguimiento" className="nav__link nav__link--inside">Matriz De Seguimiento</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="TarjetasDeOperacion" className="nav__link nav__link--inside">Tarjetas De Operación</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="TramitesDeTransito" className="nav__link nav__link--inside">Trámites de Tránsito</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Turnos" className="nav__link nav__link--inside">Turnos</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="Automotor" className="nav__link nav__link--inside">Automotor</NavLink>
        </li>
        <li className="list__inside">
          <NavLink to="ZER" className="nav__link nav__link--inside">ZER</NavLink>
        </li>

      </ul>

    </li>
  );
  }
export default OptMenuModulos