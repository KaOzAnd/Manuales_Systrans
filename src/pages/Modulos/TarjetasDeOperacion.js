import { Acordeon } from "../../components/acordeon";
import TOConfigurarTarjetasDeOperacion from "../../contents/Modulos/TO/TOConfigurarTarjetasDeOperacion";
import TOCrearEmpresas from "../../contents/Modulos/TO/TOCrearEmpresa";
import TOCrearVehiculoExterno from "../../contents/Modulos/TO/TOCrearVehiculoExterno";
import TOGenerarTarjetaDeOperacion from "../../contents/Modulos/TO/TOGenerarTarjetaDeOperacion";
import TOGestionarCapacidadTransportadora from "../../contents/Modulos/TO/TOGestionarCapacidadTransportadora";

const TarjetasDeOperacion = () => {
   return (
    <div className="acordeon">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <Acordeon id={'One'} tittle={'Crear Empresa'} cont={<TOCrearEmpresas/>}/>
        <Acordeon id={'Two'} tittle={'Gestionar Capacidad Transportadora'} cont={<TOGestionarCapacidadTransportadora/>}/>
        <Acordeon id={'Three'} tittle={'Crear Vehiculo Externo'} cont={<TOCrearVehiculoExterno/>}/>
        <Acordeon id={'Four'} tittle={'Generar Tarjeta de Operacion'} cont={<TOGenerarTarjetaDeOperacion/>}/>
        <Acordeon id={'Five'} tittle={'Configurar Tarjeta de Operacion'} cont={<TOConfigurarTarjetasDeOperacion/>}/>
      </div>
    </div>
    );
  }
export default TarjetasDeOperacion