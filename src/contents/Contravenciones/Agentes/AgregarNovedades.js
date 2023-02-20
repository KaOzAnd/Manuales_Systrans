import { Acordeon } from "../../../components/acordeon";
import { Img__Barril } from "../../../Img/Barril";

const AgregarNovedades = () => {
   return (
       <div>
            <h1 className='Tittle__FirstContents'>Agregar novedades</h1>
            <ul>
            <p><u><strong>INGRESO A SYSTRANS</strong></u></p>
            <li>SE INGRESA AL APLICATIVO SYSTRANS MEDIANTE LA DIRECCIÓN WEB ASIGNADA</li>
            <li>INICIAN SESIÓN CON EL USUARIO Y CONTRASEÑA ASIGNADOS</li>
            </ul>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.ImgInicio} alt='Inicio Systrans'></img>
            </div><br />
            <p><strong><u>ingresen a la opción contravenciones</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Contravenciones_} alt='Inicio Systrans'></img>
            </div>
            <p><strong><u>ingresan a la opción agentes</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.agentes} alt='Inicio Systrans'></img>
            </div>
            <p><u><strong>ingresan a la opción agregar novedad</strong></u></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_AgregarNovedad} alt='Inicio Systrans'></img>
            </div>
            <p>esto desplegara el siguiente formulario</p>
            <p>este formulario permite agregar novedades sobre los dispositivos entregados a los agentes</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_FormularioAgregarNovedades} alt='Inicio Systrans'></img>
            </div>
            <ul>
              <p>ingresan los datos solicitados</p>
              <li><p><u><strong>Fecha</strong></u></p></li>
              <p>al hacer clic sobre el campo fecha se desplegara un calendario en el cual podrán seleccionar la fecha de la novedad</p>
              <img src={Img__Barril.Agentes_Calendario}></img><br/>
              <li><p><u><strong>serie del dispositivo</strong></u></p></li>
              <p>al hacer clic sobre este campo se desplegara un lista de numero de serie de los dispositivos creados y pueden filtrar por el numero de serie</p>
              <img src={Img__Barril.Agentes_SerieDelDispositivo}></img>
              <li><p><u><strong>agente</strong></u></p></li>
              <p>para seleccionar el agente deben dar clic sobre el icono <img src={Img__Barril.Btn_Lupa}></img> lo cual desplegara el siguiente formulario</p>
              <img src={Img__Barril.Agentes_BuscarAgente}></img>
              <p>pueden buscar el agente por numero de documento de identidad o por placa, una vez ingresado alguno de los dos datos daran clic en el icono 
                <img src={Img__Barril.Btn_Lupa}></img>
              </p>
              <li>Observaciones</li>
              <div className='Img__Center'>
              <img className='Img__Systrans' src={Img__Barril.Agentes_FormularioAgregarNovedadesGuardar} alt='Inicio Systrans'></img>
              </div>
              <p>una vez ingresados todos los datos daran clic en <img src={Img__Barril.Btn_GuardarBlanco}></img></p>
            </ul>
            <p>de esta forma puedes agregar novedades</p>
            <p>para visualizar las novedades creadas sigan lo siguientes pasos</p>
            <Acordeon id={'Five'} tittle={<p><u><strong>Visualizar Novedades</strong></u></p>} cont={<>
            <h1 className='Tittle__FirstContents'>Visualizar Novedades</h1>
            <ul>
            <p><u><strong>INGRESO A SYSTRANS</strong></u></p>
            <li>SE INGRESA AL APLICATIVO SYSTRANS MEDIANTE LA DIRECCIÓN WEB ASIGNADA</li>
            <li>INICIAN SESIÓN CON EL USUARIO Y CONTRASEÑA ASIGNADOS</li>
            </ul>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.ImgInicio} alt='Inicio Systrans'></img>
            </div><br />
            <p><strong><u>ingresen a la opción contravenciones</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Contravenciones_} alt='Inicio Systrans'></img>
            </div>
            <p><strong><u>ingresan a la opción agentes</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.agentes} alt='Inicio Systrans'></img>
            </div>
            <p><u><strong>ingresan a la opción ver novedades</strong></u></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_VerNovedades} alt='Inicio Systrans'></img>
            </div>
            <p>aquí podrán visualizar las novedades creadas</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_VerNovedadesCreadas} alt='Inicio Systrans'></img>
            </div>
            <p>desde esta vista también pueden crear novedades, editar las actuales o ver los detalles</p>
            <lu>
              <li>para crear una nueva den clic en el botón <img src={Img__Barril.Btn_Nuevo2}></img></li>
              <li>para editar o ver detalles de una novedad den clic en el icono <img src={Img__Barril.icono_flecha}></img>
              </li>
            </lu>
            <p> y sigan los pasos antes mencionados en agregar novedades</p>
            </>}/>
       </div>
    );
  }
export default AgregarNovedades