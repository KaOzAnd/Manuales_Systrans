import { Img__Barril } from "../../../Img/Barril";

const MantenimientoGruas = () => {
    return (
        <div>
            <h1 className="Tittle__FirstContents">Registrar Grúas</h1>
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
            <p><u><strong>ingresan a la OPCIÓN Grúas</strong></u></p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.Gruas}></img>
            </div><br />
            <li>ingresan a la opción Mantenimiento Grúas</li>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasMantenimiento}></img>
            </div><br />
            <h3><u><strong>Mantenimiento Grúas</strong></u></h3>
            <p>en esta OPCIÓN se desplegara un formulario donde se mostrarán los grupos y Implementos creados de cada grupo</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasMantenimientoFormulario}></img>
            </div><br />
            <li>para iniciar el Mantenimiento de una Grúa ingresan la placa</li>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasMantenimientoFormularioPlaca}></img>
            </div><br />
            <li>ingresan el kilometraje actual de la Grúa</li>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasMantenimientoFormularioKm}></img>
            </div><br />
            <li>seleccionan los estados</li>
            <p>en cada Implemento seleccionan uno de los tres estados que se muestra en cada Implemento</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasEstadosImplementos} style={{ width: 700 }}></img>
            </div><br />
            <p>en la selección de estados de cada Implemento solo se puede seleccionar 1 estado entre los 3:
                <ol>
                    <li>Bueno</li>
                    <li>Malo</li>
                    <li>N/A</li>
                </ol>
                y pueden seleccionar si ese Implemento tendrá una Observación
            </p>
            <p>una vez seleccionado los estados de los implementos, si desean ingresar observaciones como acciones de mejora, deben activar el boton acción de mejora.</p>
            <img src={Img__Barril.GruasBotonAccionDeMejora}></img>
            <p>esto habilitara un cuadro de texto para escribir dichas observaciones</p>
            <p>una vez seleccionados todos los estados y ingresadoas las observaciones darán clic en guardar</p>
            <li>esto habilitara una opción para cargar archivos al Mantenimiento</li>
            <p></p>
        </div>
    );
}
export default MantenimientoGruas