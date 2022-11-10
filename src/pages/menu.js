import OptMenuDigitalizacion from "../components/Digitalizacion";
import Mantis from "../components/Mantis";
import { OptMenu } from "../components/optmenu";
import { OptMenuAdministracion } from "../components/OptMenuAdministracion";
import OptMenuContravenciones from "../components/OptMenuContravenciones";
import OptMenuModulos from "../components/OptMenuModulos";
import OptMenuParametros from "../components/OptMenuParametros";
import OptMenuServicios from "../components/OptMenuServicios";


export const Menu = () => {
    return (
    <nav className="nav">

      <ul className="list">
        {/* <h1 className="Tittle__Systrans">Manuales Systrans</h1> */}
            <OptMenu/>
            <OptMenuAdministracion/>
            <OptMenuContravenciones/>
            <OptMenuModulos/>
            <OptMenuParametros/>
            <OptMenuServicios/>
            <br/>
            <OptMenuDigitalizacion/>
            <Mantis/>
        </ul>
      </nav>
    );
  }