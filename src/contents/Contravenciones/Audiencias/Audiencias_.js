import { Acordeon } from "../../../components/acordeon";
import { Img__Barril } from "../../../Img/Barril";

const Audiencias_ = () => {
   return (
       <div>
            <h1 className='Tittle__FirstContents'>Audiencias</h1>
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
            <p><strong><u>ingresan a la opción Audiencias</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Audiencias} alt='Inicio Systrans'></img>
            </div>
            <p><strong><u>audiencias</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Audiencias_Opciones} alt='Inicio Systrans'></img>
            </div>
            <Acordeon id={'Six'} tittle={<li>Agendas</li>} cont={<>
            <p><u><strong>ingresan a la opción agendas</strong></u></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Audiencias_OpcionesAgendas} alt='Inicio Systrans'></img>
            </div>
            <p>en esta opción pueden ver las agendas creadas y crear una nueva agenda</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Audiencias_Agendas} alt='Inicio Systrans'></img>
            </div>
            <p>para crear una nueva agenda llenaran la información del formulario <strong><u>crear agenda</u></strong></p>
            <div>
            <img className='Img__Systrans' src={Img__Barril.Audiencias_CrearAgenda} style={{width: 500}}></img>
            <lu>
              <li>fecha</li>
              <p>seleccionan la fecha en la cual se realizara la audiencia y hora</p>
              <div>
              <img className='Img__Systrans' src={Img__Barril.Audiencias_Calendario} style={{width: 400}}></img>
              </div>
              <li><strong>comparendo</strong></li>
              <p>ingresan el Comparendo y dan clic en el icono de la <img src={Img__Barril.Btn_Lupa}></img> y saldra el siguiente mensaje con los datos del Comparendo</p>
              <div className='Img__Center'>
              <img className='Img__Systrans' src={Img__Barril.Audiencias_MensajeComparendo} alt='Inicio Systrans'></img>
              </div>
              <li><strong>motivo</strong></li>
              <p>seleccionan un motivo de acuerdo a los motivos creados</p>
              <li><strong>inspector</strong></li>
              <p>seleccionan un inspector de acuerdo a los Inspectores creados</p>
            </lu>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Audiencias_CrearAgenda_} style={{width: 500}}></img>
            </div>
            </div>
            <p></p>
            <p>una vez ingresados los datos para crear la agenda darán clic en el boton <img src={Img__Barril.icono_guardar}></img>
            y saldrá el siguiente mensaje</p>
            <img className='Img__Systrans' src={Img__Barril.Audiencias_AgendaGuardada} style={{width: 400}}></img>
            <p>una vez guardada la agenda se habilitara el calendario donde se mostrara las audiencias agendadas</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Audiencias_AgendaCalendario}></img>
            </div>
            </>}/>
            <Acordeon id={'Seven'} tittle={<li>Audiencias</li>} cont={<>
            <p>ingresan a la opción Audiencias</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Audiencias_OpcionAudiencias} alt='Inicio Systrans'></img>
            </div>
            <p>en esta opción pueden ver las audiencias agendadas, solo pueden ver las audiencias en las cuales usted aparece como inspector</p>
            <p>aquí pueden buscar las audiencias por Numero de cédula, numero de comparendo o fecha de agenda</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Audiencias_Lista} alt='Inicio Systrans'></img>
            </div>
            </>}/>
            <Acordeon id={'Eight'} tittle={<li>Apelaciones</li>} cont={<><p>a</p></>}/>
       </div>
    );
  }
export default Audiencias_