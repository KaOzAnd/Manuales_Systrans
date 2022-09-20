import { useState } from "react";
import { NavLink } from "react-router-dom";

const OptMenuServicios = () => {

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
                <i className="fa-solid fa-share-nodes" title="Servicios"></i>
                <a href="#" className="nav__link">Servicios</a>
            </div>


            <ul className={cl}>
                <li className="list__inside">
                    <NavLink to="Auditorias" className="nav__link nav__link--inside">Auditorias</NavLink>
                </li>
                <li className="list__inside">
                    <NavLink to="Utilidades" className="nav__link nav__link--inside">Utilidades</NavLink>
                </li>
                <li className="list__inside">
                    <NavLink to="Integracion" className="nav__link nav__link--inside">Integracion</NavLink>
                </li>
                <li className="list__inside">
                    <NavLink to="Runt" className="nav__link nav__link--inside">Runt</NavLink>
                </li>
                <li className="list__inside">
                    <NavLink to="ServiciosRest" className="nav__link nav__link--inside">Servicios Rest</NavLink>
                </li>
                <li className="list__inside">
                    <NavLink to="Soporte" className="nav__link nav__link--inside">Soporte</NavLink>
                </li>
            </ul>
        </li>
    );
}
export default OptMenuServicios