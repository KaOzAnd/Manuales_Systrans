import { Img__Barril } from "../../../Img/Barril";

const Audiencias_CrearInspectores = () => {
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
      <p><strong><u>ingresan a la opción Inspectores</u></strong></p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias_Inspectores} alt='Inicio Systrans'></img>
      </div>
      <p>en esta opción pueden ver los inspectores creado y también pueden crear nuevos inspectores</p>
      <p>para crear un inspector nuevo darán clic en el botón <img src={Img__Barril.Btn_Nuevo2}></img> y esto desplegara un formulario para ingresar los datos del inspector</p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias_InspectoresFormularioPersona} style={{width: 800}}></img>
      </div>
      <p>una vez ingresados los datos darán clic en el botón de <img src={Img__Barril.icono_GuardarVerde}></img></p>
      <p>de esta forma crearan un inspector.</p>
      <p>de necesitar editar un inspector darán clic <img src={Img__Barril.icono_flecha}></img> y seleccionaran la opción editar, 
      esto desplegara el formulario anterior y una vez modificados los datos solicitados darán clic en guardar.</p>
    </div>
    );
  }
export default Audiencias_CrearInspectores