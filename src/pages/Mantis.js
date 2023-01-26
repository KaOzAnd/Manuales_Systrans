import { Acordeon } from "../components/acordeon";
import { Img__Barril } from "../Img/Barril";

const Mantis = () => {
  return (
    <div className="acordeon">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <Acordeon id={'One'} tittle={'MantisBT'} cont={<>
          <h1 className="Tittle__FirstContents">MANTISBT</h1>
          <h2><p>Funcionamiento Mantis</p></h2>
          <p>Mantis Bug Tracker o MantisBT como se conoce comúnmente, es una herramienta de código abierto que sirve para ayudar
            en la gestión  de tareas de un equipo de trabajo.
          </p>
          <p>
            Esta herramienta se utiliza para llevar registro histórico de las diferentes alteraciones que se realizan en un sistema o empresa gestionando equipos de trabajo de manera remota.
          </p>
          <h3><p>Ingreso a MantisBT</p></h3>
          <p>Link de ingreso <a href="http://201.217.202.244:8080/mantisbt" target={'_blank'}>http://201.217.202.244:8080/mantisbt</a></p>
          <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.mantisbt} style={{ width: 800 }}></img>
          </div><br />
          <p>al ingresar al sistema con su usuario y contraseña la primera pantalla que verá es la siguiente:</p>
          <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.mantisbt_panel}></img>
          </div><br />
          <p>Los botones y las acciones que pueden realizar en esta pantalla son las siguientes:</p>
          <h3><p>reportar incidencia  <img className='Img__Systrans' src={Img__Barril.BotonBT_ReportarIncidencia} style={{ width: 200 }}></img> este botón lo lleva a la pantalla para crear una nueva incidencia</p></h3>
          <div className="Img__Center">
            <img className='Img__Systrans' src={Img__Barril.SeleccionarProyecto} style={{ width: 800 }}></img>
          </div>
          <p>al crear una nueva incidencia, lo primero que debemos verificar es el proyecto al cual le vamos a reportar nuestra incidencia</p>
          <p>Luego de seleccionado damos clic en el botón Seleccionar Proyecto nos lleva a una nueva pantalla donde debemos diligenciar estos campos:</p>
          <div className="Img__Center">
            <img className="Img__Systrans" src={Img__Barril.detallesincidencia}></img>
          </div>
          <p><strong>categoría:</strong> este viene por defecto en global para que los ingenieros a cargo puedn visualizarlos todos.</p>
          <p><strong>prioridad:</strong> en esta etique se debe tener especial cuidado debido a que acá marcamos que tan urgente es la solucion de una incidencia, los posibles seleccionables son. <strong>Ninguna, Baja, Normal, Alta, Urgente, Inmediata.</strong></p>
          <p><strong>nota:</strong> los tiempos que se verán a continuación son de respuesta al caso más <strong>NO</strong> de solución de este, por tal motivo se debe tener en cuenta lo siguiente:</p>
          <p>los tiempos de espera para cada uno son los siguientes:</p>
          <ul>
            <li><p><strong>ninguna:</strong> 8 a 10 horas hábiles.</p></li>
            <li><p><strong>baja:</strong> 6 a 8 horas hábiles.</p></li>
            <li><p><strong>normal:</strong> 4 a 6 horas hábiles.</p></li>
            <li><p><strong>Alta:</strong> 2 a 4 horas hábiles.</p></li>
            <li><p><strong>Urgente:</strong> 1 a 2 horas hábiles.</p></li>
            <li><p><strong>Inmediata:</strong> 1 hora hábil.</p></li>
          </ul>
          <p>teniendo en cuentas estos niveles no todos los casos son inmediatos o urgentes y se debe tener un buen criterio al momento de crear y seleccionar un nivel de prioridad debido a que nuestros ingenieros siempre se encuentran realizando diferentes labores.</p>
          <p><strong>resumen:</strong> titulo de nuestro problema o incidencia.</p>
          <p><strong>descripción:</strong> detalle de nuestra incidencia en la cual debemos ser minuciosos al momento de especificar que queremos que nuestro ingenieros solucionen o validen.</p>
          <p><strong>subir archivos:</strong> adjuntos de cualquier tipo que puedan servir como evidencia de nuestra incidencia; tales como .doc, .docx (archivos word), xsl xslx (archivos Excel), csv, txt (archivos planos) entre otros. Con una capacidad máxima de 10 mb (Megabytes).</p>
          <p>luego de diligenciar los campos damos clic en el botón <strong>Enviar incidencia</strong></p>
          <div className="Img__Center">
            <img className="Img__Systrans" src={Img__Barril.enviarevidencia}></img>
          </div><br></br>
          <p>el sistema generará de maner automática el código de la incidencia y el estado en el que se encuentra.</p>
          <div className="Img__Center">
            <img className="Img__Systrans" src={Img__Barril.incidenciareportadadetalle}></img>
          </div>
          <h2><p>Mi vista</p></h2>
          <p><img src={Img__Barril.botonBT_MiVista}></img> este botón los llevara a la página principal y les muestra las incidencias reportadas por el usuario logueado, Mantis no asignados, resueltos o modificados; al igual que una línea de tiempo de las incidencias reportadas</p>
          <div className="Img__Center">
            <img className="Img__Systrans" src={Img__Barril.panelbt_mivista}></img>
          </div>
          <p>al momento de que un ingeniero se asigne y/0 solucione una incidencia reportada por el usuario, este se notificará vía email y cambiará el estado de nuestra incidencia en el sistema y se vera en la linea de tiempo la misma notificación.</p>
          <div className="Img__Center">
            <img className="Img__Systrans" src={Img__Barril.Bt_LineaDeTiempo} style={{width: 700}}></img>
          </div>
          <p>de igual manero cuando se de respuesta a una incidecia reportada nos llegará notificación vía email y cambuará el estado del mismo.</p>
          <p>al ingresar a la incidencia solucionada veran la solución dada por el ingeniero a cargo.</p>
          <div className="Img__Center">
            <img className="Img__Systrans" src={Img__Barril.mantis_resuelta}></img>
          </div>
          <p>después de esto y al validar la información dada por el ingeniero tiene dos opciones, <strong>cerrar</strong> la incidencia, o <strong>Reabrir</strong> la incidencia por insatisfacción en la respuesta dada por el ingeniero.</p>
          <div className="Img_Center">
            <img className="Img__Systrans" src={Img__Barril.BT_reabrir_cerrar}></img>
          </div>
          <p>al dar clic en alguno de los dos botones este nos llevará a una pantalla en la cual se enviará un menaje al ingeniero con la incidencia asignada.</p>
          <p>de esta manera daremos por terminado la incidencia o segiremos con el seguimiento de la misma.</p>
        </>} />
      </div>
    </div>
  );
}
export default Mantis