import { useState } from "react";

export const OptMenuMult = () => {

  const [cl, setAction] = useState('list__hide')

    const open = () => {
      
      if(cl === 'list__hide')
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
          <a href="#" className="nav__link nav__link--inside">Comparendos</a>
        </li>

        <li className="list__inside">
          <a href="#" className="nav__link nav__link--inside">Tarjetas de Operacion</a>
        </li>

      </ul>

    </li>

    )
  }