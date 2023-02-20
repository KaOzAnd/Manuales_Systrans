import { Acordeon } from "../../components/acordeon";
import ManualEnConstruccion from "../../components/cobtenido1";
import Audiencias_ from "../../contents/Contravenciones/Audiencias/Audiencias_";
import Audiencias_ConfigurarTiempos from "../../contents/Contravenciones/Audiencias/Audiencias_ConfigurarTiempos";
import Audiencias_CrearInspectores from "../../contents/Contravenciones/Audiencias/Audiencias_CrearInspectores";
import Audiencias_MotivosDeAudiencias from "../../contents/Contravenciones/Audiencias/Audiencias_MotivosDeAudiencias";
import Audiencias_Rol from "../../contents/Contravenciones/Audiencias/Audiencias_Rol";
import ProcesoAudiencia from "../../contents/Contravenciones/Audiencias/ProcesoAudiencia";

const Audiencias = () => {
  return (
    <div className="acordeon">
      <div className="accordion" id="accordionPanelsStayOpenExample">
      <Acordeon id={'One'} tittle={'Audiencias'} cont={<Audiencias_/>}/>
      <Acordeon id={'Two'} tittle={'Crear Inspectores'} cont={<Audiencias_CrearInspectores/>}/>
      <Acordeon id={'Three'} tittle={'Crear Rol'} cont={<Audiencias_Rol/>}/>
      <Acordeon id={'Four'} tittle={'Crear Motivos de Audiencia'} cont={<Audiencias_MotivosDeAudiencias/>}/>
      <Acordeon id={'Five'} tittle={'Configurar Tiempos'} cont={<Audiencias_ConfigurarTiempos/>}/>
      <Acordeon id={'Nine'} tittle={'Proceso Audiencia (Agregar Asistentes, Agregar Evidencia, Notificar, Re agendar, Iniciar o Cancelar Audiencia)'} cont={<ProcesoAudiencia/>}/>
      </div>
    </div>
  );
}
export default Audiencias