import { Acordeon } from "../../components/acordeon";
import AsignarPermisos from "../../contents/Administracion/AsignarPermisos";
import CreacionDeUsuarios from "../../contents/Administracion/CreacionDeUsuarios";

const CuentasDeUsuarios = () => {
    return (
        <div className="acordeon">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <Acordeon id={'One'} tittle={'Creación De Usuarios'} cont={<CreacionDeUsuarios/>} />
                <Acordeon id={'Two'} tittle={'Asignación de Permisos'} cont={<AsignarPermisos/>} />
                {/* <Acordeon id={} tittle={} cont={}/> */}
            </div>
        </div>
    );
}
export default CuentasDeUsuarios