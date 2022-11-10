import { Acordeon } from "../../components/acordeon";
import RegistrarGruas from "../../contents/Modulos/TO/Gruas_Registrar";
import MantenimientoGruas from "../../contents/Modulos/TO/MantenimientoGruas";

const Gruas = () => {
   return (
    <div className="acordeon">
      <div className="accordion" id="accordionPanelsStayOpenExample">
      <Acordeon id={'One'} tittle={'Registrar Grúas'} cont={<RegistrarGruas/>}/>
      <Acordeon id={'Two'} tittle={'Mantenimiento Grúas'} cont={<MantenimientoGruas/>}/>
      <Acordeon id={'Three'} tittle={'Mantenimiento Correctivo Grúas'} cont={''}/>
      <Acordeon id={'Four'} tittle={'Grúas Operativos'} cont={''}/>
      <Acordeon id={'Five'} tittle={'Implementos'} cont={''}/>
      <Acordeon id={'Six'} tittle={'Tipo de Observación'} cont={''}/>
      <Acordeon id={'Seven'} tittle={'Grupos Implementos'} cont={''}/>
      </div>
    </div>
    );
  }
export default Gruas