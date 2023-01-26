import { Acordeon } from "../../components/acordeon";
import C_Dispositivos from "../../contents/Contravenciones/Dispositivos/C_Dispositivos";

const Dispositivos = () => {
   return (
    <div className="acordeon">
      <div className="accordion" id="accordionPanelsStayOpenExample">
      <Acordeon id={'One'} tittle={'Dispositivos'} cont={<C_Dispositivos/>}/>
      </div>
    </div>
    );
  }
export default Dispositivos