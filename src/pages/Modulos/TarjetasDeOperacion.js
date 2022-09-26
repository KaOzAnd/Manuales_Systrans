import { Acordeon } from "../../components/acordeon";
import TOCrearEmpresas from "../../contents/Modulos/TO/TOCrearEmpresa";

const TarjetasDeOperacion = () => {
   return (
    <div className="acordeon">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <Acordeon id={'One'} tittle={'Crear Empresa'} cont={<TOCrearEmpresas/>}/>
        <Acordeon id={'Two'} tittle={'Gestionar Capacidad Transportadora'} cont={''}/>
        <Acordeon id={'Three'} tittle={'Crear Vehiculo Externo'} cont={''}/>
        <Acordeon id={'Four'} tittle={'Generar Tarjeta de Operacion'} cont={''}/>
        <Acordeon id={'Five'} tittle={'Configurar Tarjeta de Operacion'} cont={''}/>
      </div>
    </div>
    );
  }
export default TarjetasDeOperacion