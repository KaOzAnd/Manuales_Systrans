import { Acordeon } from "../../components/acordeon";
import ManualEnConstruccion from "../../components/cobtenido1";
const Consultas = () => {
   return (
    <div className="acordeon">
      <div className="accordion" id="accordionPanelsStayOpenExample">
      <Acordeon id={'One'} tittle={'Manual En Construcción'} cont={<ManualEnConstruccion/>}/>
      </div>
    </div>
    );
  }
export default Consultas