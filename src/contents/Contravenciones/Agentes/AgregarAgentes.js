import { Img__Barril } from "../../../Img/Barril";

const AgregarAgentes = () => {
   return (
       <div>
            <h1 className='Tittle__FirstContents'>Agregar agentes</h1>
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
            <p><strong><u>ingresen a a la opción agregar</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_Agregar} alt='Inicio Systrans'></img>
            </div><br/>
            <p>al ingresar a esta opción les mostrara el siguiente formulario</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_AgregarFormulario} alt='Inicio Systrans'></img>
            </div><br/>
            <p>Ingresan los datos solicitados y dan clic en el botón guardar </p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_AgregarFormularioGuardar} alt='Inicio Systrans'></img>
            </div>
            <p>una ves den clic en guardar les saldrá el siguiente mensaje</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_AgregarFormularioMs} style={{width: 600}}></img>
            </div>
       </div>
    );
  }
export default AgregarAgentes