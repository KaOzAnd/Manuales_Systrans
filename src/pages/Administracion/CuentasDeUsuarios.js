import { Acordeon } from "../../components/acordeon";
import { Contenido1 } from "../../components/cobtenido1";

const CuentasDeUsuarios = () => {
    return (
        <div className="acordeon">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <Acordeon id={'One'} tittle={'Creacion De Usuarios'} cont={<Contenido1 />} />
                <Acordeon id={'Two'} tittle={'Construccion De Menus'} cont={<Contenido1 />} />
                <Acordeon id={'Three'} tittle={'Platillas De Permisos'} cont={<Contenido1 />} />
                {/* <Acordeon id={} tittle={} cont={}/> */}
                {/* <Acordeon id={} tittle={} cont={}/> */}
            </div>
        </div>

    );
}
export default CuentasDeUsuarios