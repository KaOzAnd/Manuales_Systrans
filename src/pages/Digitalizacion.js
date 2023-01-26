import { Acordeon } from "../components/acordeon";
import Instalacion_Digitalizacion from "../contents/Instalacion_Digitalizacion";

const Digitalizacion = () => {
   return (
    <div className="acordeon">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <Acordeon id={'One'} tittle={'Instalacion Systrans - Digitalización v.3'} cont={<Instalacion_Digitalizacion/>}></Acordeon>
      </div>
    </div>
    );
  }
export default Digitalizacion