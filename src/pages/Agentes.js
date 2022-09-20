import { Acordeon } from "../components/acordeon";
import { Contenido1 } from "../components/cobtenido1";

const Agentes = () => {
  return (
    <div className="acordeon">
        <div className="accordion" id="accordionPanelsStayOpenExample">

            <Acordeon id={'One'} tittle={'Creacion De Usuarios'} cont={<Contenido1/>}/>
            <Acordeon id={'Two'} tittle={'Dos'}/>
            <Acordeon id={'Four'} tittle={'Tres'}/>
        </div>
    </div>

);
  }
export default Agentes