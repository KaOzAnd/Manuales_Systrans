import { Acordeon } from "../../../components/acordeon";
import { Img__Barril } from "../../../Img/Barril";

const TOGenerarTarjetaDeOperacion = () => {
    return (
        <div>
            <h1 className="Tittle__FirstContents">Generar Tarjeta de operación</h1>
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
            <p><u><strong>generar tarjeta de operación</strong></u></p>
            <p>en este proceso pueden realizar las siguientes opciones</p>
            <ul>
                <li><strong>liquidar</strong></li>
                <li><strong>renovación</strong></li>
                <ul>
                    <li>preautorizar</li>
                    <li>autorizar</li>
                    <li>subsanar</li>
                    <li>rechazos</li>
                    <li>imprimir t.o</li>
                </ul>
                <li><strong>finalizar renovación</strong></li>
                <li><strong>entregars</strong></li>
            </ul>
            <div className='Img__Center'>
                <img className="Img__Systrans" src={Img__Barril.TOInicio} alt="Inicio Systrans" ></img>
            </div><br />
            <Acordeon id={'Six'} tittle={<li><strong>liquidación</strong></li>} cont={
                <>
                    <li>ingresan a la OPCIÓN liquidar</li>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOLiquidar} alt="Inicio Systrans" ></img>
                    </div><br />
                    <p>ingresan el nombre de la Empresa</p>
                    <p>una vez ingresado el nombre de la empresa, cagara los vehículos que pertenecen a esa empresa</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOLiquidar2} alt="Inicio Systrans" ></img>
                    </div><br />
                    <p>seleccionan el vehículo al cual desean realizar la liquidación</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOLiquidar3} alt="Inicio Systrans" ></img>
                    </div><br />
                    <p>seleccionan el trámite que van a realizar</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOLiquidar4} alt="Inicio Systrans" ></img>
                    </div><br />
                    <p>una vez seleccionado dan clic en <img src={Img__Barril.icono_generarliquidacion}></img></p>
                    <li>se mostrara la siguiente liquidación</li>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOLiquidacion} alt="Inicio Systrans" ></img>
                    </div><br />
                </>
            } />
            <Acordeon id={'Seven'} tittle={<li><strong>renovación</strong></li>} cont={
                <>
                    <p>para inciar el proceso de renovación deben tener en cuenta que la liquidación debe estar en estado pagada</p>
                    <ul>
                        <li>ingresan a la opción de renovación para ello lo pueden hacer de dos formas</li>
                        <ol>
                            <li>por la miga de pan, la cual dice en que modulo se encuentran actualmente</li>
                            <div className='Img__Center'>
                                <img className="Img__Systrans" src={Img__Barril.TOMigaDePan} alt="Inicio Systrans" ></img>
                            </div><br />
                            <p>para esto dan clic en tarjetas de operación</p>
                            <p>esto los devolverá a la vista principal de tarjetas de operación y seleccionan la opción renovacion</p>
                            <div className='Img__Center'>
                                <img className="Img__Systrans" src={Img__Barril.TORenovacion} alt="Inicio Systrans" ></img>
                            </div><br />
                            <li>dan clic en el menú en módulos, luego en tarjetas de operación y luego en renovación</li>
                            <div className='Img__Center'>
                                <img className="Img__Systrans" src={Img__Barril.TOModulos_TO_Renovacion} alt="Inicio Systrans" ></img>
                            </div><br />
                        </ol>
                    </ul>
                    <p>una vez dentro del módulo de renovación</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOInicioRenovacion} alt="Inicio Systrans" ></img>
                    </div><br />
                    <li>ingresan el nombre de la empresa</li>
                    <li>ingresan el numero de liquidacion</li>
                    <p>una vez ingresado el numero de liquidación saldra el siguiente aviso</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOAvisoRenovacion} alt="Inicio Systrans" style={{ width: 700 }}></img>
                        <p>el mensaje esta informando si desean radicar la liquidación, darán clic en continuar</p>
                    </div><br />
                    <p>con esto se habilitara el siguiente campo</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TORenovacionRadicacion} alt="Inicio Systrans"></img>
                    </div><br />
                    <li>donde pueden seleccionar la placa a que van a radicar</li>
                    <li>pueden seleccionar el esato del tramite</li>
                    <p>si en el proceso necesitan cargar un archivo relacionado al proceso darán clic en el icono del panel <img src={Img__Barril.icono_papel}></img> lo cual nos desplegara la siguiente ventana</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.subirarchivos} alt="Inicio Systrans" style={{ width: 700 }}></img>
                    </div><br />
                    <li>puedn arrastrar el archivo o dar clicl en el botón axaminar, buscan el archivo y una vez seleccionado saldrá de la siguiente forma.</li>
                    <img src={Img__Barril.archivocargado}></img><br />
                    <li>una vez seleccionado el archivo daran clic en el icono de cargar <img src={Img__Barril.icono_cargar}></img> y asi cargan la evidencia para el proceso</li>
                    <br /><p>una vez seleccionado estos dos datos darán clic en procesar y saldra el siguiente mensaje</p>
                    <img src={Img__Barril.radicadoexitoso}></img>
                    <p>una ves radicado el trámite deben seleccionar la fecha de expedición de la <strong>tarjeta de operación</strong> </p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOFecha_to} alt="Inicio Systrans"></img>
                    </div><br />
                    <p>una vez ingresada la fecha de expedición, systrans automáticamente calculara la fecha de vencimiento. con estos datos darán clic en el boton validar datos <img src={Img__Barril.icono_validardatos}></img></p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.DatosValidados} alt="Inicio Systrans" style={{ width: 400 }}></img>
                    </div><br />
                    <p>una vez validados los datos finalizan el proceso</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.RenovacionIniciado} alt="Inicio Systrans" style={{ width: 400 }}></img>
                    </div><br />
                    <li>una vez terminado este proceso se puede dirigir a la opción de <strong>preautorizar</strong></li>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOPreautorizar} alt="Inicio Systrans"></img><br />
                        <br /><img className="Img__Systrans" src={Img__Barril.TOPreautorizar1} alt="Inicio Systrans"></img>
                    </div><br />
                    <p>una vez dentro del módulo de preautorizar, aquí pueden ver los tramites que están para preautorizar si dan clic en el icono de la flecha <img src={Img__Barril.icono_flecha}></img>desplagra el siguiente menú	</p>
                    <img src={Img__Barril.TOMenuPreuatorizar}></img>
                    <Acordeon id={'Eight'} tittle={<li><strong>detalles</strong></li>} cont={<>
                        <p>esta opción permite ver una previsualización de la tarjeta de operación</p>
                        <div className='Img__Center'>
                            <img className="Img__Systrans" src={Img__Barril.TOPrevisualizacionTO} alt="Inicio Systrans"></img><br />
                        </div><br />
                    </>} />
                    <Acordeon id={'Nine'} tittle={<li><strong>evidencias</strong></li>} cont={<>
                        <p>esta opción permite visualizar las evidencias cargadas</p>
                        <div className='Img__Center'>
                            <img className="Img__Systrans" src={Img__Barril.TOEvidenciasCargadas} alt="Inicio Systrans"></img><br />
                        </div><br />
                    </>} />
                    <li><strong>aprobar o rechazar</strong></li>
                    <Acordeon id={'Ten'} tittle={<li><strong>vinculación</strong></li>} cont={<>
                        <p>vinculacón permite visualizar el documento que fue cargado como resolución que habilito la capacidad transportadora</p>
                        <div className='Img__Center'>
                            <img className="Img__Systrans" src={Img__Barril.TOEvidenciasCargadas} alt="Inicio Systrans"></img><br />
                        </div><br />
                    </>} />
                    <p>una vez validados los datos, podrán aprobar o rechazar el proceso</p>
                    <li>si aprueban saldrá el siguiente mensaje</li>
                    <img src={Img__Barril.AprobarTramite}></img>
                    <p>dan clic en continuar, saldrá el siguiente mensaje</p>
                    <img src={Img__Barril.TramiteProcesado}></img>
                    <li>si rechazan el trámite saldrá el siguiente mensaje</li>
                    <img src={Img__Barril.RechazoTramite}></img>
                    <p>ingresan las observaciones por las cual rechazan el proceso y dan clic en guardar</p>
                    <li>en el caso de rechazar el trámite para subsanar se deben dirigir a la opción de subsanar y así podrán evidenciar la causa del rechazo y subsanar</li>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOSubsanar} alt="Inicio Systrans"></img><br />
                    </div><br />
                    <p>una vez dentro de la opción <strong>subsanar</strong> podrán evidenciar los trámites que están por subsanar</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOSubsanarList} alt="Inicio Systrans"></img><br />
                    </div><br />
                    <p>para verificar loas observaciones de las cuasas del rechazo darán clic en el icono de la flecha <img src={Img__Barril.icono_flecha}></img> y desplegara el siguiente menú
                        <img src={Img__Barril.TOMenuSubsanar}></img> seleccionan la opción proceso y desplegara la siguiente ventana</p>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.ToSubsanarHistorialRechazos} alt="Inicio Systrans"></img><br />
                    </div><br />
                    <p>dan clic sobre un estado y les desplegara la información sobre ese estado</p>
                    <p>en el caso de ser necesario para subsanar un proceso deban adjuntar un documento nuevo o eliminar uno, darán clic en el icono de la flecha <img src={Img__Barril.icono_flecha}></img>y desplegara el menu <img src={Img__Barril.TOMenuSubsanar}></img> seleccionan la opcion evidencias</p>
                    <li>esta vista permite ver los documentos cargados y cargar nuevos documentos o eliminar los actuales</li>
                </>
            } />
        </div>
    );
}
export default TOGenerarTarjetaDeOperacion