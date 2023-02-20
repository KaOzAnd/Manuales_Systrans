import { Acordeon } from "../../components/acordeon";
import AgregarAgentes from "../../contents/Contravenciones/Agentes/AgregarAgentes";
import AgregarNovedades from "../../contents/Contravenciones/Agentes/AgregarNovedades";
import AsignarDispositivos from "../../contents/Contravenciones/Agentes/AsignarDispositivos";
import ListarAgentes from "../../contents/Contravenciones/Agentes/ListarAgentes";

const Agentes = () => {
  return (
    <div className="acordeon">
      <div className="accordion" id="accordionPanelsStayOpenExample">
      <Acordeon id={'One'} tittle={'Agregar Agentes'} cont={<AgregarAgentes/>}/>
      <Acordeon id={'Two'} tittle={'Listar Agentes'} cont={<ListarAgentes/>}/>
      <Acordeon id={'Four'} tittle={'Agregar Novedades'} cont={<AgregarNovedades/>}/>
      <Acordeon id={'Six'} tittle={'Asignar Dispositivos'} cont={<AsignarDispositivos/>}/>
      </div>
    </div>
  );
}
export default Agentes