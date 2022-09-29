import { Acordeon } from "../../../components/acordeon";
import { Img__Barril } from "../../../Img/Barril";
const TOConfigurarTarjetasDeOperacion = () => {
    return (
        <div>
            <h1 className="Tittle__FirstContents">configurar tarjeta de Operacion</h1>
            <ul>
                <p><u><strong>INGRESO A SYSTRANS</strong></u></p>
                <li>SE INGRESA AL APLICATIVO SYSTRANS MEDIANTE LA DIRECCIÓN WEB ASIGNADA</li>
                <li>INICIAN SESIÓN CON EL USUARIO Y CONTRASEÑA ASIGNADOS</li>
            </ul>
            <div className='Img__Center'>
                <img className="Img__Systrans" src={Img__Barril.ImgInicio} alt="Inicio Systrans" ></img>
            </div><br />
            <p><u><strong>INGRESAN A LA OPCIÓN MÓDULOS</strong></u></p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.ImgModulos}></img>
            </div><br />
            <p><u><strong>INGRESAN A LA OPCIÓN TARJETAS DE OPERACIÓN</strong></u></p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TO}></img>
            </div><br />
            <br /><p>las configuraciones que pueden realizar sobre el MÓDULO de tarjeta de operación son:</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TOConfiguraciones}></img>
            </div><br />
            <Acordeon id={'One'} tittle={<li>CAUSALES DE RECHAZO</li>} cont={
                <>
                    <p><u><strong>causales de rechazo</strong></u></p>
                    <li>ingresan a la opción de causales de rechazo</li>
                    <div className='Img__Center'>
                        <img className='Img__Systrans' src={Img__Barril.TOCausalesDeRechazo}></img>
                    </div><br />
                    <p>para agregar una causal de rechazo se debe dar clic en el BOTÓN agregar <img src={Img__Barril.icono_agregar}></img> </p>
                    <li>se despliega la siguiente ventana donde ingresan el nombre de la causal y el estado</li>
                    <div className='Img__Center'>
                        <img className='Img__Systrans' src={Img__Barril.TOCausalesDeRechazo_Datos} style={{ width: 700 }}></img><br />
                        <br /><p> ingresado el nombre de la causal de rechazo y seleccionado el estado dan clic en guardar</p>
                        <img src={Img__Barril.DatosGuardadosConExito}></img>
                        <p>asi se crea una causal de rechazo</p>
                    </div><br />
                </>
            } />
            <Acordeon id={'Two'} tittle={<li>CORREOS DE NOTIFICAÓN</li>} cont={<>
                <p><u><strong>correos de notificación</strong></u></p>
                <p>ingresan a correos de notificación</p>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.TOCorreosNotificacion}></img>
                </div><br />
                <p>para agregar un correo de notificación dan clic en el BOTÓN agregar</p>
                <li>despliega el siguiente formulario</li>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.TOCorreosNotificacion_Datos} style={{ width: 700 }}></img>
                </div><br />
                <p>una vez ingresados los datos dan clic en guardar</p>
                <img src={Img__Barril.DatosGuardadosConExito}></img>
                <p>así han agregado un correo de notificación</p>
            </>} />
            <Acordeon id={'Three'} tittle={<li>configuración de PÓLIZAS</li>} cont={<>
                <p><u><strong>pólizas</strong></u></p>
                <li>ingresan a la opción pólizas</li>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.TOPolizas}></img>
                </div><br />
                <p>aquí pueden ingresar las pólizas requeridas, pueden configurar si es requerida la póliza.</p>
                <p>para ello dan clic en el icono de la flecha <img src={Img__Barril.icono_flecha}></img> y seleccionan la opción editar la cual despliega el siguiente formulario</p>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.TOPolizas_Formulario} style={{ width: 700 }}></img>
                </div><br />
                <p>y aqui pueden seleccionar si la poliza es requerida</p>
                <p>una vez seleccionado el tipo d póliza y si es requerida daremos clic en guardar</p>
                <img src={Img__Barril.DatosGuardadosConExito}></img>
            </>} />
            <Acordeon id={'Four'} tittle={<li>configuración de trámites</li>} cont={<>
                <p><u><strong>configurar tramites</strong></u></p>
                <li>ingresan a la opción configurar trámites</li>
                <p>aquí se despliega la lista de todos los trámites que tiene configurado el organismo de tránsito</p>
                <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TOListaTramites}></img>
            </div><br />
            <p>de la lista sele los trámites que pueden realizar por el MÓDULO de TARJETAS de operación y dan clic en el BOTÓN de guardar <img src={Img__Barril.DatosGuardados}></img></p>
            </>} />
        </div>
    );
}
export default TOConfigurarTarjetasDeOperacion