import { useState } from "react";
import { NavLink } from "react-router-dom";

export const OptMenuAdministracion = () => {

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
        <i className="fa-solid fa-users" title="Administración"></i>
        <a href="#" className="nav__link">Administración</a>
      </div>

      <ul className={cl}>
        <li className="list__inside">
          <NavLink to="CuentasDeUsuarios" className="nav__link nav__link--inside">Cuentas de usuario</NavLink>
        </li>

        <li className="list__inside">
          <NavLink to="ConstruccionDeMenus" className="nav__link nav__link--inside">Construcción de Menús</NavLink>
        </li>

        <li className="list__inside">
          <NavLink to="PlantillasDePermisos" className="nav__link nav__link--inside">Plantillas de Permisos</NavLink>
        </li>

      </ul>

    </li>

  )
}